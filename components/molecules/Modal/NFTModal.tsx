import React, { useEffect } from 'react';
import AuthData from '@components/common/interfaces/AuthData.interface';
import { useAuth } from 'hooks/useAuth';
import { useRef, useState } from 'react';
import { Modal } from 'utils/model_utils';
import Cookie from 'js-cookie';

import endPoints from 'services/api';
import axios from 'axios';
//opening modal in a global scope
const NFTModal = () => {
  const openNFTModal = (payload) => {
    console.log(payload);
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

  
  const NFTModal = ({ callback, data, update, enableBottomSheet = false }: any) => {
    const nft = data;
    const [cookie, setCookie] = useState(null);
    const [enabled, setEnabled] = useState(nft.available);
    async function getCookie() {
      const token = await Cookie.get();

      setCookie(token.token);
    }
    const headers = {
      Authorization: `Bearer ${cookie}`,
    };

    async function putData(endpoint, payload) {
      const response = await axios.put(endpoint, payload, { headers });
      console.log(response.data.available);
      setEnabled(response.data.available);
      update();
    }

    const setAvailable = () => {
      const endPoint = endPoints.NFTS.putNFT(nft.id);
      const payload = {
        available: !enabled,
      };
      putData(endPoint, payload);
      console.log(endPoint, payload);
    };
    console.log(nft);
    useEffect(() => {
      getCookie();
    }, [data, enabled]);

      return (
        <div
          className="bg-subDark flex flex-column text-center justify-center tracking-tight"
          style={{
            position: 'relative',
            height: '50vh',
            width: '100%',
          }}
        >
         <h2 className='text-rojo1 p-2 text-4x1 md:text-5xl lg:text-6xl font-extrabold tracking-tight'>
            COMPRAR NFT -
         {nft.name}
         </h2>
         <p className='text-white p-2 text-2x1  md:text-3xl lg:text-4xl'>Elige cantidad de NFT {nft.name}</p>
         <div className='text-white p-2 text-2x1 md:text-3xl lg:text-4xl tracking-tight'>
            -1+
         </div>
         <p className='text-rojo1 p-2 text-4x1 md:text-5xl lg:text-6xl font-extrabold tracking-tight'> 1 NFT = {nft.price*1} USD</p>
         <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Comprar</button>
        </div>
      );

  };
 
  return { openNFTModal, };
};

export default NFTModal;
