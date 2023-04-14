//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract RojoFundador is ERC721, ERC721URIStorage, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter public _totalMinted;
        string public contractURI;
    uint96 royaltyFeesInBips;
    address royaltyAddress;
bool private _transferConfirmedByOwnerCandidate;
    address private _owner;
    address private _ownerCandidate;

    mapping(address => uint8) private mintedAddress;
    mapping(string => uint8) private URIMapping;
    uint256 public PRICE_PER_TOKEN;
    uint256 public LIMIT_PER_ADDRESS = 150;
    uint256 public MAX_SUPPLY  = 150;
    uint256 public tokenPriceUSD;
    AggregatorV3Interface internal priceFeed;


    constructor() ERC721("ROJO FUNDADOR", "RF") {
         priceFeed = AggregatorV3Interface(0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE);
                 tokenPriceUSD = 1000000000000000000000;
                royaltyFeesInBips = 300;
                royaltyAddress = owner();
    }
      function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        super._burn(tokenId);
    }

 function getBNBPrice() public view returns(int) {
        (, int price, , , ) = priceFeed.latestRoundData();
        return (price / 10**8);
    }

     function getBNBPrice2() public view returns(uint256) {
     uint256 bnbPrice = uint256(getBNBPrice());
        return  bnbPrice;
    }


    function NFTPriceInBNB() public view returns(uint256) {
        uint256 bnbPrice = uint256(getBNBPrice());
        return tokenPriceUSD / bnbPrice;
    }

    function NFTPrice() public returns(uint256) {
         PRICE_PER_TOKEN = NFTPriceInBNB();
       return PRICE_PER_TOKEN;
    }
    
    function setLimit(uint256 limit) external onlyOwner{
        LIMIT_PER_ADDRESS = limit;
    }
    
    function setMaxSupply(uint256 max_supply) external onlyOwner{
        MAX_SUPPLY = max_supply;
    }
      function setPriceUSD(uint256 price_USD) external onlyOwner{
        tokenPriceUSD = price_USD;
    }
    
    function mintNFT(string memory _tokenURI)
        payable
        external
        nonReentrant
        returns (uint256)
    {
        PRICE_PER_TOKEN = uint256(NFTPriceInBNB());
 string memory text = string.concat("BNB paid is incorrect. Price in BNB is: ", Strings.toString(PRICE_PER_TOKEN));
        require(PRICE_PER_TOKEN <= msg.value, text );
        require(mintedAddress[msg.sender] < LIMIT_PER_ADDRESS, "You have exceeded minting limit");
        require(_totalMinted.current() + 1 <= MAX_SUPPLY, "You have exceeded Max Supply");
        require(URIMapping[_tokenURI] == 0, "This NFT has already been minted");
        URIMapping[_tokenURI] += 1;
        mintedAddress[msg.sender] += 1;
        _tokenIds.increment();
        _totalMinted.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, _tokenURI);

         
        withdrawMoney();
        return newItemId;
    }
       function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return ERC721URIStorage.tokenURI(tokenId);
    }

    function withdrawMoney() internal {
        address payable to = payable(royaltyAddress);
        to.transfer(address(this).balance);
    }

   

    function calculateRoyalty(uint256 _salePrice)  public view returns (uint256) {
        return (_salePrice / 10000) * royaltyFeesInBips;
    }

    function supportsInterface(bytes4 interfaceId)
            public
            view
            override(ERC721)
            returns (bool)
    {
        return interfaceId == 0x2a55205a || super.supportsInterface(interfaceId);
    }
    function getContractBalance(address ContractAddress) public view onlyOwner returns(uint){
    return ContractAddress.balance;
}
function transferOwnership(address newOwnerCandidate) public virtual onlyOwner override {
        _ownerCandidate = newOwnerCandidate;
    }

    /**
     * @dev Confirms the ownership transfer of the contract to a new account.
     * Must be first called by the owner candidate and then by the current owner.
     */
    function confirmOwnershipTransfer() public virtual onlyOwner {
        if (_transferConfirmedByOwnerCandidate) {
            require(_owner == _msgSender(), "Ownable: caller is not the owner");
            _transferConfirmedByOwnerCandidate = false;
    
        } else {
            require(_ownerCandidate == _msgSender(), "Ownable: caller is not the owner candidate");
            _transferConfirmedByOwnerCandidate = true;
        }
}
}