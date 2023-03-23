import React from 'react';
import { Grid, Segment, Container } from 'semantic-ui-react';

import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mainDark">
        <div className="py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <section className="banner-container">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-black">ROJO FOUNDER</h1>
              <p className="mb-8 text-lg font-normal text-gray-100 lg:text-xl ">
                La primera colección nacional de NFTs estará basada en la tokenización de activos deportivos tangibles e intangibles, incluyendo bienes inmuebles y el metaverso. Estos activos se
                mostrarán en los futuros estadios Arena Rojo que están planeados para ser construidos en varias ciudades alrededor del mundo.
              </p>
              <p className="mb-8 text-lg font-bold text-rojo1 lg:text-xl sm:px-16 xl:px-48 ">
                Elige la cantidad correcta de NFTs y consigue tus UTILITY, ROYALTY NFTs en unos pocos clics. ¡Vamos a traer la victoria juntos!
              </p>
              <h2 className="text-gray-100">COMPRA NFT ROJO FOUNDER</h2>
              <Link href="staking" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black  bg-white rounded-full  hover:bg-amber-600 ">
                ¡COMPRAR AHORA!
              </Link>
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
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
              </div>
            </div>
            <div className="inline-flex justify-center items-center">
              <img src="https://sharktech-nft.vercel.app/rojo-banner.png" alt="" />
            </div>
          </section>
          {/* Partners Info */}
          <section>
            <div className="banner-container">
              <div className="landing-cart">
                <span className='text-gris'>Created in cooperation with</span>
                <h3 className='text-white'>SHARK TECHNOLOGY</h3>
                <p className='text-gris'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt facilis reprehenderit impedit possimus.</p>
                <h3 className='text-white'>INCRIPTED</h3>
                <p className='text-gris'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt facilis reprehenderit impedit possimus.</p>
              </div>
              <div className="landing-cart">
                <span className='text-gris'>Project goal</span>
                <h3 className='text-white'>40,000,000 UAH</h3>
                <h2 className='text-rojo1'>4x naval drones for the UNITED24</h2>
                <p className='text-gris'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt facilis reprehenderit.</p>
                <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">More on drone fleet</button>
              </div>
            </div>
          </section>
          {/* NFT Info */}
          <section>
            <div>
              <h2 className='text-white'>The first ROJO FUNDADOR collection will be <span className='text-rojo1'>150</span>  NFTs, offered privately and will grant its holder preferential treatment.</h2>
            <span className='text-gris'>Buy cats from the UACatsDivision collection - be part of the Ukrainian victory!</span>
            </div>
            <div className="inline-flex items-center">
              <img className="nft-info-img" src="https://sharktech-nft.vercel.app/rojo-banner.png" alt="" />
              <img className="nft-info-img" src="https://sharktech-nft.vercel.app/rojo-banner.png" alt="" />
              <img className="nft-info-img" src="https://sharktech-nft.vercel.app/rojo-banner.png" alt="" />
              <img className="nft-info-img sm-none" src="https://sharktech-nft.vercel.app/rojo-banner.png" alt="" />
              <img className="nft-info-img sm-none" src="https://sharktech-nft.vercel.app/rojo-banner.png" alt="" />
            </div>
            <div className="banner-container">
              <div className="banner-text">
                <h4 className='text-white'>UACatsDivision is an NFT collection of 150 unique cats on the Ethereum blockchain.</h4>
                <span className='text-gris'>A TD cat, a marine cat, a pilot cat, a police cat, etc. Everyone who defends our freedom today will find themselves among the fluffy heroes.</span>
              </div>
              <div className="banner-text flex flex-column justify-start">
                <h4 className='text-white'>Each cat is unique and generated with more than 150 different options of emotions, clothes, etc.</h4>
                <span className='text-gris'>
                  <strong className='text-white'>Quantity</strong>
                  {' – 150 NFT'}
                </span>
                <span className='text-gris'>
                  <strong className='text-white'>Blockchain</strong>
                  {' – Binance SmartChain'}
                </span>
                <span className='text-gris'>
                  <strong className='text-white'>Cost</strong>
                  {' – $1000 USD'}
                </span>
                <span className='text-gris'>
                  <strong className='text-white'>Royalty</strong>
                  {' – 3% (All funds will be sent to charity and aid for Ukraine)'}
                </span>
              </div>
            </div>
            <div className='flex flex-column'>
              <span className='text-gris'>*One hundred cats are being withheld from the sale. These will be used for marketing and promo purposes to encourage collection kickoff and growth.</span>
              <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
            </div>
          </section>
          {/* Club Rojo Founder */}
          <section>
            <h2 className='text-white'>Welcome to the club</h2>
            <h2 className='text-white'>ROJO FOUNDER - NFT</h2>
            <span className='text-gris'>Being a UACatsDivision cat is not only honorable but also practical!</span>
            <div className="club-cart__container">
              <div className="landing-cart">
                <h3 className='text-white'>Exclusive club UACatsDivision</h3>
                <p className='text-gris'>You get unique access to an exclusive club, and the first thing we will do together is choose names for each naval drone.</p>
                <p className='text-gris'>Collection owners will get access to closed channels and a forum.</p>
              </div>
              <div>
                <img src="https://sharktech-nft.vercel.app/rojo-logo.png" alt="" />
              </div>
              <div className="landing-cart">
                <h3 className='text-white'>A piece of digital art and a collector's item</h3>
                <p className='text-gris'>You will become the owner of a unique NFT, which is not just a work of art but can be worth much more than its initial price.</p>
                <p className='text-gris'>You can always resell NFTs on any marketplace that supports Ethereum NFTs.</p>
              </div>
              <div className="landing-cart">
                <h3 className='text-white'>NFT cat is your Digital ID</h3>
                <p className='text-gris'>Use UACatsDivision NFT as an avatar on social networks or messengers.</p>
                <p className='text-gris'>That’s the best way to show the world our heroes through our own profiles.</p>
              </div>
              <div className="landing-cart">
                <h3 className='text-rojo1'>100% of funds is donated via UNITED24</h3>
                <p className='text-gris'>By buying NFT from the collection, you donate funds via UNITED24.</p>
                <p className='text-gris'>The key partner and beneficiary of the collection is the UNITED24 platform.</p>
              </div>
              <div className="landing-cart">
                <h3 className='text-white'>The best digital gift</h3>
                <p className='text-gris'>UACatsDivision NFT can be easily gifted. Just imagine how perfect this gift will be on Ukrainian Victory Day!</p>
              </div>
            </div>
            
          </section>
          {/* How Does It Work */}
          <section>
            <h2 className="text-white">¿Cómo funciona?</h2>
            <div className="club-cart__container">
              <div className="inline-flex">
                <i>1</i>
                <p className='text-gris'>On the day of the project's start, an NFT collection generating will become possible on the website uacatsdivision.com</p>
              </div>
              <div className="inline-flex">
                <i>2</i>
                <p className='text-gris'>To receive NFT, the user must connect their crypto wallet to the Internet browser.</p>
              </div>
              <div className="inline-flex">
                <i>3</i>
                <p className='text-gris'>The user pays the NFT creation cost and the network fee.</p>
              </div>
              <div className="inline-flex">
                <i>4</i>
                <p className='text-gris'>The user receives an NFT token in their wallet; thus, it becomes their property.</p>
              </div>
              <div className="inline-flex">
                <i>5</i>
                <p className='text-gris'>The project receives funds in its wallet for each NFT paid by the user.</p>
              </div>
              <div className="inline-flex">
                <i>6</i>
                <p className='text-gris'>After the entire collection generation, funds will be donated via UNITED24 platform.</p>
              </div>
            </div>
            <div>
              <span>All funds received will be permanently recorded in the blockchain and available to the general public.</span>
              <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
            </div>
          </section>
          {/* Info */}
          <section>
            <h2 className='text-white'>Destined for success and victory</h2>
            <p className='text-gris'>With you, we are creating a collectible online attribute that will demonstrate the unity of the whole world in support of Ukrainians.</p>
            <div className="banner-container">
              <div className="landing-cart">
                <h2 className="text-white"> 100%</h2>
               
                </div>
              <div className="landing-cart">
              <h2 className="text-white">United 24 </h2>
                </div>
            </div>
          </section>
          {/* Video */}
          <section>
            <div>
              <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/Az9tVHjpJ_Y"></iframe>
            </div>
          </section>
          {/* Palcos */}
          <section>
            <h2 className='text-white'>Why did we opt to donate to United24, and how could they help?</h2>
            <p className='text-gris'>Multipurpose unmanned surface vehicles are a unique Ukrainian project.</p>
            <div className="banner-container">
              <div className='square'>
                <img src="" alt="palco1" />
                <img src="" alt="palco2" />
                <img src="" alt="palco3" />
                <img src="" alt="palco4" />
              </div>
              <div>
                <p className='text-gris'>
                  Fundraising platform UNITED24 has started fundraising for a fleet of naval drones.{' '}
                  <strong>
                    Its main task is to protect the waters of Ukrainian seas and peaceful cities. The fleet will also help unlock the corridor for civilian ships transporting grain worldwide.
                  </strong>
                </p>
                <p className='text-gris'>
                  The marine drone is a unique and secret Ukrainian project. One unit costs 10 million hryvnias. The price includes a drone equipped with an autopilot system, video subsystems,
                  including night vision, communications that are protected from the influence of electronic equipment, backup communication modules, as well as a ground autonomous control station,
                  transportation and storage systems, and data center.
                </p>
                <button className="inline-flex  bg-mainDark justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center">Action Button</button>
              </div>
            </div>
          </section>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-gray-400 uppercase">Partners</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                HACKEN
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                whitebit
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                kpunñño
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                UNIT.City
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                Skylum
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                Qollabe
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                Shark Tech
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                kpunñño
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                kpunñño
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                kpunñño
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                kpunñño
              </a>
              <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                kpunñño
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Roadmap */}
      <section>
        <div>
          <h2 className='text-white'>Roadmap & Strategy</h2>
          <p className='text-gris'>
            We want to share with you the UACatsDivision roadmap that highlights our strategy and helps us to get closer to our goals. A roadmap explains the story, demonstrates the progress and the
            big picture of the project, and helps you understand where you need to go next.
          </p>
        </div>
      </section>
      {/* Contact Us */}
      <section>
        <div>
          <h2 className='text-white'>Contact us</h2>
          <p className='text-gris'>
            We want to share with you the UACatsDivision roadmap that highlights our strategy and helps us to get closer to our goals. A roadmap explains the story, demonstrates the progress and the
            big picture of the project, and helps you understand where you need to go next.
          </p>
        </div>
      </section>
      <footer className="p-4 bg-mainDark rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-mainDark">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://sharktechnology.dev/" className="hover:underline">
            Shark Technology™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
