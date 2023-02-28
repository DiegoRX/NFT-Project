import '../styles/global.css';
import Layout from '@components/Layout/Layout';
import 'semantic-ui-css/semantic.min.css';

import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { MetamaskProvider } from 'hooks/useMetamask';
import { SessionProvider as AuthProvider} from "next-auth/react"
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import '../styles/tailwind.css';
import { AppProps } from 'next/app';
import { ProviderAuth } from 'hooks/useAuth';

function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>NFT Project</title>
      </Head>
      <ProviderAuth>
        <MetamaskProvider>
     
            <Layout>
              <Component {...pageProps} />
            </Layout>

        </MetamaskProvider>
      </ProviderAuth >
    </>
  );
}
