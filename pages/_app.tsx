/* eslint-disable no-unused-vars */
import '../styles/global.css';
import Layout from '@components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';
import 'antd';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { MetamaskProvider } from 'hooks/useMetamask';
import { SessionProvider as AuthProvider } from 'next-auth/react';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../styles/tailwind.css';
import { AppProps } from 'next/app';
import { ProviderAuth } from 'hooks/useAuth';
import { Modal } from '../utils/model_utils';
import { ModalWrapper } from '@components/molecules';
import { useEffect } from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { BinanceTestnet } from '@thirdweb-dev/chains';
function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}
let globalModalRef: any;

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Modal.registerModal(globalModalRef);
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rojo Fundador - NFT</title>
      </Head>
      <ThirdwebProvider activeChain={BinanceTestnet}>
        <ProviderAuth>
          <MetamaskProvider>
            <Layout>
              <Component {...pageProps} />
              <ModalWrapper ref={(ref) => (globalModalRef = ref)} />
            </Layout>
          </MetamaskProvider>
        </ProviderAuth>
      </ThirdwebProvider>
    </>
  );
}
