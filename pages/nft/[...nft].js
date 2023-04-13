/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import endPoints from 'services/api';
import contractABI from '@context/contractABI.json';
import getBlockchain from '@context/ethereum.js';
import detectEthereumProvider from '@metamask/detect-provider';
import { useAuth } from 'hooks/useAuth';
import Cookie from 'js-cookie';
import axios from 'axios';
import Image from 'next/image';
import Swal from 'sweetalert2';
import Link from 'next/link';

const NFT = () => {
  const router = useRouter();
  const [BNBPrice, setBNBPrice] = useState();
  const [accountBalance, setAccountBalance] = useState();
  const [priceUSD, setPriceUSD] = useState();
  const [account, setAccount] = useState(null);
  const [minted, setMinted] = useState(false);
  const [NFTContract, setNFTContract] = useState(null);
  const [contractAddress, setContractAddress] = useState(null);
  const [cookie, setCookie] = useState(null);
  const [status, setStatus] = useState('no-tx');
  const auth = useAuth();
  const priceInUSD = 1000000000000000000000;
  async function getCookie() {
    const token = await Cookie.get();

    setCookie(token.token);
  }
  getCookie();
  const headers = {
    Authorization: `Bearer ${cookie}`,
  };
  const [NFTUnique, setNFTUnique] = useState({
    id: 0,
  });
  const [NFT, setNFT] = useState({
    name: '',
    address: '0x34nkjsfdnlskm93409fdsvdsvdf',
    available: true,
    createdAt: '2023-03-21T01:58:11.553Z',
    description: '',
    id: 0,
    mintedNFT: 0,
    image: '',
    nfts: [],
    price: 0,
    updatedAt: '2023-03-21T01:58:11.553Z',
  });
  const { nft } = router.query;
  const endpoint = endPoints.NFTS.getNFT(nft);
  const getNFT = async () => {
    const data = await useFetch(endpoint);
    return data;
  };

  getNFT().then((data) => {
    if (data) {
      let nft = data.data.data;

      setNFT(nft);
      setContractAddress(nft.address);
    }
  });
  const tokenID = parseInt(minted) + 1;
  const endpointUniqueNft = endPoints.NFTS.getNFTUnique(tokenID);

  const getNFTUnique = async () => {
    const data = await useFetch(endpointUniqueNft);
    return data;
  };

  getNFTUnique().then((data) => {
    if (data) {
      let nft = data.data.data;
      setNFTUnique(nft);
    }
  });

  ///---------------------- METAMASK
  const updateNFT = async (minted) => {
    const endpointPutNFT = endPoints.NFTS.putNFT(NFT.id);
    const response = await axios.put(endpointPutNFT, { mintedNFT: minted }, { headers });
  };
  const updateNFTUnique = async (address) => {
    const endpointPutNFTUnique = endPoints.NFTS.putNFTUnique(parseInt(minted) + 1);
    NFTUnique;
    const userId = auth?.user?.id;
    const response = await axios.put(endpointPutNFTUnique, { userId }, { headers });
  };
  const handleMint = async () => {
    if (auth?.user?.id != null) {
      let provider = await detectEthereumProvider();
      if (provider) {
        const web3Provider = new Web3(window.ethereum);
        const tokenURI = NFTUnique.tokenUri;
        const options = {
          from: account[0],
          gas: web3Provider.utils.toWei('1000000', 'wei'),
          value: BNBPrice,
        };

        const response = await NFTContract.methods
          .mintNFT(tokenURI)
          .send(options)
          .on('transactionHash', function () {
            setStatus('Executing...');
          })
          .on('receipt', function (receipt) {
            setStatus('Success.', receipt);
            const address = receipt.events.Transfer.address;
            updateNFT();
            updateNFTUnique(address);
            openAlert(address);
          })
          .catch((revertReason) => {
            console.error('ERROR! Transaction reverted: ' + revertReason.receipt.transactionHash);
            setStatus('Error');
          });
      }
    } else {
      alert('Please login');
    }
  };

  const openAlert = (address) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `NFT creado`,
      text: `Copia el address de tu NFT y regístralo en tu wallet: ${address}
      Utiliza el id ${parseInt(minted) + 1}`,
      confirmButtonText: 'Ok',
      background: '#121212',
      customClass: {
        title: 'text-white',
        closeButton: '...',
        htmlContainer: 'text-white',
        confirmButton: 'bg-rojo1',
      },
    });
  };
  if (status == 'Success.') {
    setTimeout(() => {
      setStatus('no-tx');
    }, 3000);
  }
  useEffect(() => {
    async function initNFTContract() {
      const { accounts } = await getBlockchain();
      const account = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccount(accounts);
      let provider = await detectEthereumProvider();

      if (provider) {
        const web3Provider = new Web3(window.ethereum);
        let factoryContract = new web3Provider.eth.Contract(contractABI, contractAddress);
        let BNBPrice = await factoryContract.methods.NFTPriceInBNB().call();
        let priceUSD = await factoryContract.methods.tokenPriceUSD().call();
        let minted = await factoryContract.methods._totalMinted().call();
        let accountBalance = await factoryContract.methods.balanceOf(account[0]).call();
        setNFTContract(factoryContract);
        setPriceUSD(priceUSD / 10 ** 18);
        setMinted(minted);
        updateNFT(minted);
        updateNFT(minted);
        setBNBPrice(BNBPrice);
        setAccountBalance(accountBalance);
      }
    }
    initNFTContract();
    window.addEventListener('beforeunload', (evento) => {
      evento.preventDefault();
      evento.returnValue = '';
      return '';
    });
  }, [NFT, contractAddress, minted, status]);

  return (
    <div className="h-auto">
      <div className="h-screen">
        <section className="nft-container  h-auto">
          <div className="flex flex-column justify-center item1 p-2 ">
            <h2 className="p-1 text-4xl font-extrabold tracking-tight leading-none text-rojo1 md:text-5xl lg:text-6xl ">{NFT.name}</h2>
            <div className="p-1 my-4   text-lg md:text-lg lg:text-lg   text-white  flex text-justify">{NFT.description}</div>

            <div className=" pt-1  text-2xl md:text-2xl lg:text-2xl text-rojo1 flex justify-between">
              <span>Tonkens Minteados:</span>
            </div>
            <div className=" pb-1  text-2x1 md:text-2xl lg:text-2xl text-white flex justify-between">{minted}</div>
            <div className="pt-1  text-2x1 md:text-2xl lg:text-2xl text-rojo1  flex justify-between">
              <span>Precio en USD:</span>
            </div>
            <div className="pb-1  text-2x1 md:text-2xl lg:text-2xl text-white  flex text-right">${priceUSD}</div>
            <div className="pt-1  text-2x1 md:text-2xl lg:text-2xl text-rojo1  flex text-right">
              <span>Precio en BNB:</span>
            </div>
            <div className="pb-1  text-2xl md:text-2xl lg:text-2xl text-white  flex justify-between">{BNBPrice / (10 ** 18).toString()}</div>
            <div className="pt-1  text-2xl md:text-2xl lg:text-2xl text-rojo1  flex justify-between">
              <span>{NFT.name} NFTs en tu wallet:</span>
            </div>
            <div className="pb-1  text-2x1 md:text-2xl lg:text-2xl text-white  flex justify-between">{accountBalance}</div>
            {/* <div className="p-2 text-white  flex justify-between">
            <span>Available</span>
            {NFT?.available.toString()}
          </div> */}
          </div>
          <div className="flex flex-column justify-center text-center m-auto item2">
            <Image width={400} height={400} src={NFT.image} alt="" />
            <div className="  text-2x1 md:text-3xl lg:text-3xl text-white flex justify-between">
              <span>Dirección de contrato:</span>
            </div>
            <div className="  text-1x1 md:text-1xl lg:text-1xl text-white flex justify-between">{contractAddress}</div>
            <Link target="_blank" href={`https://www.bscscan.com/address/${contractAddress}`} className="text-2xl bg-mainDark text-rojo1 font-bold ">
              Ver en BNBSCAN
            </Link>
            <>
              {status === 'no-tx' ? (
                <></>
              ) : (
                <button
                  className="bg-rojo1 text-white"
                  style={{
                    height: '45px',
                  }}
                >
                  {status}
                </button>
              )}
            </>
          </div>
        </section>
        <div className='w-full flex justify-center'>
           <button onClick={() => handleMint()} className="inline-flex w-1/2 bg-rojo1 text-2xl justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">
          COMPRAR
        </button>
        </div>
       
      </div>
    </div>
  );
};

export default NFT;
