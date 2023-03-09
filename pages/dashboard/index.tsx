import useFetch from "hooks/useFetch";
import endPoints from "services/api";

export default function Dashboard() {
  const nfts = useFetch(endPoints.NFTS.getNFTS);
  return (
    <>
      <div className="three-columns h-full">
      {nfts.map((nft) => (
     <div className="">
     <h2 className="text-2xl font-bold text-zinc-900 capitalize">Mint your NFT</h2>
     <div className=" items-center">
       <img className=" h-auto" src={nft.image} alt="" />
       <h3>In your Account: 0</h3>
       <button className="inline-flex bg-zinc-500 justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">Mint NFT</button>
     </div>
   </div>
      ))}        
      </div>
    </>
  );
}
