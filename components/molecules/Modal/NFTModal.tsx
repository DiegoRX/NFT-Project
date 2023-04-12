import React, { useEffect } from 'react';
import { useState } from 'react';
import { Modal } from 'utils/model_utils';
import Cookie from 'js-cookie';

import axios from 'axios';
//opening modal in a global scope
const NFTModal = () => {
  const openNFTModal = (payload) => {
    Modal.open({
      title: '',
      component: NFTModal,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },
        data: payload,

        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: payload,
            },
            0
          );
        },
      },
    });
  };

  const NFTModal = ({ data, update }: any) => {
    const nft = data;
    const [nftCount, setNftCount] = useState(1);
    const [cookie, setCookie] = useState(null);
    const [enabled, setEnabled] = useState(nft.available);
    async function getCookie() {
      const token = await Cookie.get();

      setCookie(token.token);
    }
    const headers = {
      Authorization: `Bearer ${cookie}`,
    };

    // eslint-disable-next-line no-unused-vars
    async function putData(endpoint, payload) {
      const response = await axios.put(endpoint, payload, { headers });
      setEnabled(response.data.available);
      update();
    }

    useEffect(() => {
      getCookie();
    }, [data, enabled]);

    const addNFT = () => {
      setNftCount(nftCount + 1);
    };
    const subtractNFT = () => {
      if (nftCount > 1) {
        setNftCount(nftCount - 1);
      }
    };
    return (
      <div
        className="bg-subDark flex flex-column text-center justify-center tracking-tight"
        style={{
          position: 'relative',
          height: '50vh',
          width: '100%',
        }}
      >
        <h2 className="text-rojo1 p-2 text-4x1 md:text-5xl lg:text-6xl font-extrabold tracking-tight">COMPRAR NFT - {nft.name}</h2>
        <p className="text-white p-2 text-2x1  md:text-3xl lg:text-4xl">Elige cantidad de NFT {nft.name}</p>
        <div className="text-white p-2 text-2x1 md:text-3xl lg:text-4xl tracking-tight">
          <button className="h-8 w-8  md:w-10 lg:w-12 md:h-10 lg:h-12 rounded-full bg-mainDark ml-auto text-white  p-1 rounded-full text-white" onClick={subtractNFT}>
            {'-'}
          </button>
          <span className="p-2">{nftCount}</span>
          <button className="h-8 w-8  md:w-10 lg:w-12 md:h-10 lg:h-12 rounded-full bg-mainDark ml-auto text-white  p-1 rounded-full text-white" onClick={addNFT}>
            {'+'}
          </button>
        </div>
        <p className="text-rojo1 p-2 text-4x1 md:text-5xl lg:text-6xl font-extrabold tracking-tight"> 1 NFT = {nft.price * nftCount} USD</p>
        <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Comprar</button>
      </div>
    );
  };

  return { openNFTModal };
};

export default NFTModal;
