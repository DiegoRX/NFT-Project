//const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;

const getWeb3 = async () => {
  return new Promise((resolve, reject) => {
    if(document.readyState=="complete")
    {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        window.location.reload()
        resolve(web3)
      } else {
        reject("must install MetaMask")
        document.getElementById("web3_message").textContent="Error: Please connect to Metamask";
      }
    }else
    {
      window.addEventListener("load", async () => {
        if (window.ethereum) {
          const web3 = new Web3(window.ethereum)
          resolve(web3)
        } else {
          reject("must install MetaMask")
          document.getElementById("web3_message").textContent="Error: Please install Metamask";
        }
      });
    }
  });
};
const startWeb3 = async ()=> {
  await getWeb3()
}
const web3 = startWeb3()
console.log(web3)
import FACTORY_ABI from "@config/abi/Factory.json"
import PAIR_ABI  from "@config/abi/Pair.json"
import ROUTER_SWAPS_ABI  from "@config/abi/RouterSwaps.json"
import ROUTER_LIQUIDITY_ABI  from "@config/abi/RouterLiquidity.json"
import COFFEE_ABI from "@config/abi/Coffee.json"
import PALMBEACH_ABI from "@config/abi/PalmBeach.json"

const FACTORY_ADDRESS =             "0x6B62BCb83f7Ee57029F84ab9C36B35E319bf9257"
const ROUTER_LIQUIDITY_ADDRESS =    "0x3CdE76937Eb5fD04F2FD06407349E627094D95D9"
const ROUTER_SWAPS_ADDRESS =        "0x47e758E5cccC5612dd5611f523cAE6be6bC1586c"
const TOKENA_ADDRESS =              "0x4d00DF78C184710aD8DcC3845fFcf4D79250CebC"
const TOKENB_ADDRESS =              "0xc7894b6932a87B0fD0aFb4077319D45509D388F6"






export const factoryContract = (
  web3,
  FACTORY_ABI,
  FACTORY_ADDRESS
);

// export const getPairAddress = async () =>{
// const PAIR_ADDRESS = await factoryContract.methods.getPair(TOKENA_ADDRESS, TOKENB_ADDRESS).call()
// }
// export const pairContract = new web3.eth.Contract( 
//   PAIR_ABI,
//   PAIR_ADDRESS 
//   )

//   export const routerSwapsContract = new web3.eth.Contract(ROUTER_SWAPS_ADDRESS, ROUTER_SWAPS_ABI)
//   export const routerLiquidityContract = new web3.eth.Contract(ROUTER_LIQUIDITY_ADDRESS, ROUTER_LIQUIDITY_ABI)
//   export const tokenAContract = new web3.eth.Contract(TOKENA_ADDRESS, PALMBEACH_ABI)
//   export const tokenBContract = new web3.eth.Contract(TOKENB_ADDRESS, COFFEE_ABI)


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "👆🏽 Write a message in the text-field above.",
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "👆🏽 Write a message in the text-field above.",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask using the top right button.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};
