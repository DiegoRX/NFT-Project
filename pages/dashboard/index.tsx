import useFetch from 'hooks/useFetch';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import endPoints from 'services/api';

const Dashboard = () => {
  const [NFTs, setNFTs] = useState([{image:'',id:'', name:''}]);
  
  const endpoint = endPoints.NFTS.getNFTS;
  const getNFT = async () => {
    const data = await useFetch(endpoint);
if(data){
   let nft = data.data.data;
    setNFTs(nft)
}
   
  };
  getNFT();

  return (
    <>
      <h2 className="text-5xl font-bold text-white capitalize">NFT Gallery</h2>
      <div className="dashboard-container h-full">
        {NFTs.map((nft, i ) => (
          <div key={i} className="">
            <div className=" items-center">
              <img className=" h-auto" src={nft.image} alt="" />
              <h3>In your Account: 0</h3>
              <Link href={'/nft/' + nft.name} className="inline-flex bg-rojo1 justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">
                Mint NFT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Dashboard;