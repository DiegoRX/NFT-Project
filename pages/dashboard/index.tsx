/* eslint-disable @next/next/no-img-element */
import useFetch from 'hooks/useFetch';
import Link from 'next/link';
import { useState } from 'react';
import endPoints from 'services/api';

const Dashboard = () => {
  const [NFTs, setNFTs] = useState([{ image: '', id: '', name: '' }]);

  const endpoint = endPoints.NFTS.getNFTS;
  const useGetNFT = async () => {
    const data = await useFetch(endpoint);
    if (data) {
      let nft = data.data.data;
      setNFTs(nft);
    }
  };
  useGetNFT();

  return (
    <>
      <h2 className="text-5xl font-bold text-white capitalize">NFT Gallery</h2>
      <div className="dashboard-container h-full">
        {NFTs.map((nft, i) => (
          <div key={i} className="">
            <div className="p-2 justify-center">
              <img className=" h-auto" src={nft.image} alt="" />
              <div className="flex flex-column justify-center m-1">
                <h2 className='text-white font-bold text-3x1 m-2'>{nft.name}</h2>
              <Link href={'/nft/' + nft.name} className="inline-flex bg-rojo1 justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">
                Mint NFT
              </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
