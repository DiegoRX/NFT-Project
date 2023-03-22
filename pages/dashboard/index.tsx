import useFetch from "hooks/useFetch";
import endPoints from "services/api";

export default function Dashboard() {
  const nfts = useFetch(endPoints.NFTS.getNFTS);
  return (
    <>
        <h2 className="text-5xl font-bold text-white capitalize">NFT Gallery</h2>
      <div className="three-columns h-full">
      {nfts.map((nft) => (
     <div className="">
     <div className=" items-center">
       <img className=" h-auto" src={nft.image} alt="" />
       <h3>In your Account: 0</h3>
       <button className="inline-flex bg-rojo1 justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">Mint NFT</button>
     </div>
   </div>
      ))}        
      </div>
    </>
  );
}
