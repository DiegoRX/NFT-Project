import React from 'react';
import useFetch from 'hooks/useFetch';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import endPoints from 'services/api';
import NFTModal from '@components/molecules/Modal/NFTModal';
const NFT = () => {
  const { openNFTModal } = NFTModal();
  const router = useRouter();
  const [nftId, setNftId] = useState();
  const [NFT, setNFT] = useState({
    name: '',
    address: '0x34nkjsfdnlskm93409fdsvdsvdf',
    available: true,
    createdAt: '2023-03-21T01:58:11.553Z',
    description: '',
    id: 0,
    image: '',
    nfts: [],
    price: 0,
    updatedAt: '2023-03-21T01:58:11.553Z',
  });
  const { nft } = router.query;
  const endpoint = endPoints.NFTS.getNFT(nft);
  const getNFT = async () => {
    const data = await useFetch(endpoint);

    setNftId(NFT[0]);

    let nft = data.data.data;
    setNFT(nft);
  };

  getNFT();

  return (
    <div className="h-screen">
      <section className="nft-container  h-1/3">
        <div className="flex flex-column justify-center item1">
          <h2 className="p-2 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{NFT.name}</h2>
          <div className="p-2   text-2x1 md:text-3xl lg:text-4xl  text-white text-md">{NFT.description}</div>
          <div className=" p-2  text-2x1 md:text-3xl lg:text-4xl text-white">
            <span>id</span>
            {NFT.id}
          </div>
          <div className="p-2  text-2x1 md:text-3xl lg:text-4xl text-white">
            <span>price</span>
            {NFT.price}
          </div>
          <div className="p-2 text-white">
            <span>Available</span>
            {NFT.available.toString()}
          </div>
          <button onClick={() => openNFTModal(NFT)} className="inline-flex bg-rojo1 justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">
            Comprar
          </button>
        </div>
        <div className="flex flex-column justify-center item2">
          <img src={NFT.image} alt="" />
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default NFT;
