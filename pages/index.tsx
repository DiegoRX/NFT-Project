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
    <div className="h-auto">
      {/* Hero */}
      <section className="bg-mainDark">
        <div className="py-20 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <section className="banner-container">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-black">ROJO FUNDADOR</h1>
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
              <div className="p-4 flex justify-center">
                <Link href="#" className="pr-4">
                  <Image width={50} height={50} src="https://sharktech-nft.vercel.app/MetaMask_Fox.svg.png" alt="" />
                </Link>
                {/* <Link href="#" className="pl-4">
                  <Image width={50} height={50} src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="" />
                </Link> */}
              </div>
            </div>
            <div className="flex flex-column justify-center items-center m-2">
              <Image className="sm-none" width={800} height={800} src="https://maroon-imaginative-loon-41.mypinata.cloud/ipfs/QmcADNuny8YX71kx5bys7fFHVQSYKCiiGjSdt4gYRbBpvC/1.jpeg" alt="" />
              <Link
                href={`https://www.bscscan.com/address/0x834322368E7641076062A40c014F33E4cBCFd8FD`}
                target="_blank"
                className="p-2 m-2 inline-flex  bg-transparent border justify-center hover:bg-transparent text-rojo1 font-bold py-3 px-5 rounded items-center text-center"
              >
                Ver Token en BNB SCAN
              </Link>
            </div>
          </section>
          {/* Partners Info */}
          <section></section>
          {/* NFT Info */}

          {/* Club Rojo Founder */}
          <section>
            <h2 className="text-white text-4xl pt-8">¡Bienvenido al club!</h2>
            <h2 className="text-white text-4xl pb-8">ROJO FUNDADOR</h2>
          </section>
          {/* How Does It Work */}

          <div className="inline-flex justify-center items-center ">
            <Image className="" width={800} height={800} src="https://sharktech-nft.vercel.app/ESTADIO_AMERICA.jpeg" alt="" />
          </div>
          <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <div className="club-cart__container"></div>
          </div>
        </div>
      </section>
      {/* Roadmap */}
      <section>
        <div className="w-full flex justify-center">
          <Image className="text-center m-2" width={80} height={80} src="https://nft-sharktech.vercel.app/high-importance-512.png" alt="" />
        </div>
        <h2 className="text-white text-center text-3xl">Términos y Condiciones</h2>
        <p className="text-white p-2">1. Para hacer efectivos los beneficios del NFT Rojo Fundador debe escribir al correo soporte@rojofundador.com</p>

        <p className="text-white p-2">
          2. Es importante que cuando ceda, regale, venda, el NFT Rojo Fundador a un nuevo usuario debe obligatoriamente comunicar a soporte los datos personales del nuevo tenedor del NFT Rojo
          Fundador correo electrónico, teléfono y nombre completo sin estos datos no nos hacemos responsables de la entrega de los beneficios contratados al nuevo usuario.
        </p>

        <p className="text-white p-2">3. Toda comunicación oficial se hará por la página ofícial de NFT Rojo Fundador y por el correo de soporte: soporte@rojofundador.com</p>
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
