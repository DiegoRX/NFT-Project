import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import getBlockchain from '@context/ethereum';
import AuthData from '@components/common/interfaces/AuthData.interface';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const auth: AuthData = useAuth();

  const connectWallet = async () => {
    const { accounts } = await getBlockchain();

    auth.setAccounts(accounts);
    if (typeof window !== 'undefined') {
      localStorage.setItem('accounts', JSON.stringify(accounts));
    }
    const { data: user } = await auth.getUser(accounts[0]);
    auth.setUser(user);
    if (user === undefined) {
      router.push('/login/register');
    } else if (user?.email) {
      router.push('/login');
    }
  };


  return (
    <div>
      {/* Hero */}
      <section className="bg-mainDark">
        <div className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <section className="banner-container">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-black">ROJO FOUNDER</h1>
              <p className="mb-8 text-lg font-normal text-justify text-gray-100 lg:text-xl ">
                La primera colección nacional de NFTs estará basada en la tokenización de activos deportivos tangibles e intangibles, incluyendo bienes inmuebles y el metaverso. Estos activos se
                mostrarán en los futuros estadios Arena Rojo que están planeados para ser construidos en varias ciudades alrededor del mundo.
              </p>
              <p style={{ padding: '0px' }} className="mb-8 text-lg font-bold text-rojo1 text-justify lg:text-xl sm:px-16 xl:px-48 ">
                Elige la cantidad correcta de NFTs y consigue tus UTILITY, ROYALTY NFTs en unos pocos clics. ¡Vamos a traer la victoria juntos!
              </p>
              <h2 className="text-gray-100 p-3">COMPRA NFT ROJO FOUNDER</h2>
              <button onClick={connectWallet} className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black  bg-white rounded-full  hover:bg-amber-600 ">
                ¡COMPRAR AHORA!
              </button>
              {/* <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent hover:text-white text-white font-bold py-3 px-5 rounded items-center text-center">METAMASK</button>
                <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white  bg-transparent rounded-lg  hover:bg-amber-600 ">
                  WALLET CONNECT
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div> */}
            </div>
            <div className="inline-flex justify-center items-center">
              <Image width={300} height={300} src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
            </div>
          </section>
          {/* Partners Info */}
          <section>
            <div className="banner-container">
              <div className="landing-cart p-2">
                <span className="text-gris p-2">Created in cooperation with</span>
                <h3 className="text-white text-4x1 p-2">SHARK TECHNOLOGY</h3>
                <p className="text-gris p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt facilis reprehenderit impedit possimus.</p>
                <h3 className="text-white text-4x1 p-2">INCRIPTED</h3>
                <p className="text-gris p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt facilis reprehenderit impedit possimus.</p>
              </div>
              <div className="landing-cart p-2">
                <span className="text-gris p-2">Project goal</span>
                <h3 className="text-white text-4x1 p-2">40,000,000 UAH</h3>
                <h2 className="text-rojo1 p-2">4x naval drones for the UNITED24</h2>
                <p className="text-gris p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt facilis reprehenderit.</p>
                <button className="p-2 inline-flex  bg-transparent border justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">
                  More on drone fleet
                </button>
              </div>
            </div>
          </section>
          {/* NFT Info */}
          <section>
            <div>
              <h2 className="text-white text-4xl p-8">
                The first ROJO FUNDADOR collection will be <span className="text-rojo1">150</span> NFTs, offered privately and will grant its holder preferential treatment.
              </h2>
              <span className="text-gris">Buy cats from the UACatsDivision collection - be part of the Ukrainian victory!</span>
            </div>
            <div className="inline-flex items-center">
              <Image width={150} height={150} className="nft-info-Image" src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
              <Image width={150} height={150} className="nft-info-Image sm-none" src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
              <Image width={150} height={150} className="nft-info-Image sm-none" src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
              <Image width={150} height={150} className="nft-info-Image sm-none" src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
              <Image width={150} height={50} className="nft-info-Image sm-none" src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
            </div>
            <div className="banner-container">
              <div className="banner-text text-justify p-2">
                <h4 className="text-white text-justify">UACatsDivision is an NFT collection of 150 unique cats on the Ethereum blockchain.</h4>
                <span className="text-gris">A TD cat, a marine cat, a pilot cat, a police cat, etc. Everyone who defends our freedom today will find themselves among the fluffy heroes.</span>
              </div>
              <div className="banner-text flex text-justify flex-column p-2">
                <h4 className="text-white">Each cat is unique and generated with more than 150 different options of emotions, clothes, etc.</h4>
                <span className="text-gris">
                  <strong className="text-white">Quantity</strong>
                  {' – 150 NFT'}
                </span>
                <span className="text-gris">
                  <strong className="text-white">Blockchain</strong>
                  {' – Binance SmartChain'}
                </span>
                <span className="text-gris">
                  <strong className="text-white">Cost</strong>
                  {' – $1000 USD'}
                </span>
                <span className="text-gris">
                  <strong className="text-white">Royalty</strong>
                  {' – 3% (All funds will be sent to charity and aid for Ukraine)'}
                </span>
              </div>
            </div>
            <div className="flex flex-column">
              <span className="text-gris">*One hundred cats are being withheld from the sale. These will be used for marketing and promo purposes to encourage collection kickoff and growth.</span>
              <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
            </div>
          </section>
          {/* Club Rojo Founder */}
          <section>
            <h2 className="text-white text-4xl pt-8">Welcome to the club</h2>
            <h2 className="text-white text-4xl pb-8">ROJO FOUNDER - NFT</h2>
            <span className="text-gris py-6">Being a UACatsDivision cat is not only honorable but also practical!</span>
            <div className="club-cart__container">
              <div className="landing-cart  p-3">
                <h3 className="text-white text-lg">Exclusive club UACatsDivision</h3>
                <p className="text-gris text-justify">You get unique access to an exclusive club, and the first thing we will do together is choose names for each naval drone.</p>
                <p className="text-gris text-justify">Collection owners will get access to closed channels and a forum.</p>
              </div>
              <div>
                <Image width={300} height={300} src="https://sharktech-nft.vercel.app/rojo-logo.png" alt="" />
              </div>
              <div className="landing-cart  p-3">
                <h3 className="text-white text-lg">A piece of digital art and a collectors item</h3>
                <p className="text-gris text-justify">You will become the owner of a unique NFT, which is not just a work of art but can be worth much more than its initial price.</p>
                <p className="text-gris text-justify">You can always resell NFTs on any marketplace that supports Ethereum NFTs.</p>
              </div>
              <div className="landing-cart  p-3">
                <h3 className="text-white text-lg">NFT cat is your Digital ID</h3>
                <p className="text-gris text-justify">Use UACatsDivision NFT as an avatar on social networks or messengers.</p>
                <p className="text-gris text-justify">That’s the best way to show the world our heroes through our own profiles.</p>
              </div>
              <div className="landing-cart p-3">
                <h3 className="text-rojo1 text-lg">100% of funds is donated via UNITED24</h3>
                <p className="text-gris text-justify">By buying NFT from the collection, you donate funds via UNITED24.</p>
                <p className="text-gris text-justify">The key partner and beneficiary of the collection is the UNITED24 platform.</p>
              </div>
              <div className="landing-cart  p-3">
                <h3 className="text-white text-lg">The best digital gift</h3>
                <p className="text-gris text-justify">UACatsDivision NFT can be easily gifted. Just imagine how perfect this gift will be on Ukrainian Victory Day!</p>
              </div>
            </div>
          </section>
          {/* How Does It Work */}
          <section>
            <h2 className="text-white text-4xl p-8">¿Cómo funciona?</h2>
            <div className="club-cart__container">
              <div className="inline-flex">
                <i>1</i>
                <p className="text-gris">On the day of the projects start, an NFT collection generating will become possible on the website uacatsdivision.com</p>
              </div>
              <div className="inline-flex">
                <i>2</i>
                <p className="text-gris">To receive NFT, the user must connect their crypto wallet to the Internet browser.</p>
              </div>
              <div className="inline-flex">
                <i>3</i>
                <p className="text-gris">The user pays the NFT creation cost and the network fee.</p>
              </div>
              <div className="inline-flex">
                <i>4</i>
                <p className="text-gris">The user receives an NFT token in their wallet; thus, it becomes their property.</p>
              </div>
              <div className="inline-flex">
                <i>5</i>
                <p className="text-gris">The project receives funds in its wallet for each NFT paid by the user.</p>
              </div>
              <div className="inline-flex">
                <i>6</i>
                <p className="text-gris">After the entire collection generation, funds will be donated via UNITED24 platform.</p>
              </div>
            </div>
            <div>
              <span>All funds received will be permanently recorded in the blockchain and available to the general public.</span>
              <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
            </div>
          </section>
          {/* Info */}
          <section>
            <h2 className="text-white text-4xl p-8">Destined for success and victory</h2>
            <p className="text-gris">With you, we are creating a collectible online attribute that will demonstrate the unity of the whole world in support of Ukrainians.</p>
            <div className="banner-container">
              <div className="landing-cart">
                <h2 className="text-white text-4xl p-8"> 100%</h2>
              </div>
              <div className="landing-cart">
                <h2 className="text-white text-4xl p-8">United 24 </h2>
              </div>
            </div>
          </section>
          {/* Video */}
          <section>
            <div>
              <iframe title="1" className="w-full aspect-video" src="https://www.youtube.com/embed/Az9tVHjpJ_Y" allowFullScreen></iframe>
            </div>
          </section>
          {/* Palcos */}
          <section>
            <h2 className="text-white text-4xl p-8">Why did we opt to donate to United24, and how could they help?</h2>
            <p className="text-gris">Multipurpose unmanned surface vehicles are a unique Ukrainian project.</p>
            <div className="banner-container">
              <div className="square">
                <Image width={300} height={300} src="https://sharktech-nft.vercel.app/stadium.jpeg" alt="palco1" style={{ width: '100%', height: '100%', padding: '6px' }} />
                <Image width={300} height={300} src="https://sharktech-nft.vercel.app/palcos.jpeg" alt="palco2" style={{ width: '100%', height: '100%', padding: '6px' }} />
                <Image width={300} height={300} src="https://sharktech-nft.vercel.app/palco.jpeg" alt="palco3" style={{ width: '100%', height: '100%', padding: '6px' }} />
                <Image width={300} height={300} src="https://sharktech-nft.vercel.app/vip.jpeg" alt="palco4" style={{ width: '100%', height: '100%', padding: '6px' }} />
              </div>
              <div className="p-3">
                <p className="text-gris text-left">
                  Fundraising platform UNITED24 has started fundraising for a fleet of naval drones.{' '}
                  <strong>
                    Its main task is to protect the waters of Ukrainian seas and peaceful cities. The fleet will also help unlock the corridor for civilian ships transporting grain worldwide.
                  </strong>
                </p>
                <p className="text-gris text-left">
                  The marine drone is a unique and secret Ukrainian project. One unit costs 10 million hryvnias. The price includes a drone equipped with an autopilot system, video subsystems,
                  including night vision, communications that are protected from the influence of electronic equipment, backup communication modules, as well as a ground autonomous control station,
                  transportation and storage systems, and data center.
                </p>
                <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
              </div>
            </div>
          </section>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <h2 className="text-white text-4xl p-16">Partners</h2>
            <div className="club-cart__container">
              <div className="flex justify-center">
                <Link href="#" style={{ width: '33%' }}>
                  <Image width={50} height={50} src="https://sharktech-nft.vercel.app/MetaMask_Fox.svg.png" alt="" />
                </Link>
              </div>
              <div className="flex justify-center ">
                <Link href="#" style={{ width: '33%' }}>
                  <Image width={50} height={50} src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png" alt="" />
                </Link>
              </div>
              <div className="flex justify-center">
                <Link href="#" style={{ width: '33%' }}>
                  <Image width={50} height={50} src="https://sharktech-nft.vercel.app/logo-big.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Roadmap */}
      <section>
        <div className="flex-column flex justify-center text-center">
          <h2 className="text-white text-4xl p-16">Roadmap & Strategy</h2>
        </div>
        <p className="text-gris">
          We want to share with you the UACatsDivision roadmap that highlights our strategy and helps us to get closer to our goals. A roadmap explains the story, demonstrates the progress and the big
          picture of the project, and helps you understand where you need to go next.
        </p>
      </section>
      {/* Contact Us */}
      <section>
        <div className="text-center">
          <h2 className="text-white text-4xl p-16">Contact us</h2>
          <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
        </div>
      </section>
      <footer className="p-4 bg-mainDark rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-mainDark">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link href="https://sharktechnology.dev/" className="hover:underline">
            Shark Technology™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
