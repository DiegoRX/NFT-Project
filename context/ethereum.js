import detectEthereumProvider from '@metamask/detect-provider';
import { useRouter } from 'next/router';

const getBlockchain = () =>
   
    new Promise(async (resolve, reject) => {
        let provider = await detectEthereumProvider();
        if (provider) {
            const accounts = await provider.request({ method: 'eth_requestAccounts' });
            const networkId = await provider.request({ method: 'net_version' })
            // console.log(accounts)
            const web3Provider = new Web3(window.ethereum);
            // provider = new ethers.providers.Web3Provider(provider);

            console.log('Ethereum successfully detected!')

            const addresses = await web3Provider.eth.getAccounts()

            resolve({
                accounts,
            });

            return ({
                accounts,
            });
        } else if (!provider) {
            alert('Install Metamask');
        }
        reject('Install Metamask');
    })

export default getBlockchain;
