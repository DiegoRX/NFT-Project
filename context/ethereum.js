import detectEthereumProvider from '@metamask/detect-provider';
import COFFEE_ABI from '@config/abi/Coffee.json'
import PALMBEACH_ABI from '@config/abi/PalmBeach.json'
import FACTORY_ABI from '@config/abi/Factory.json'
import PAIR_ABI from '@config/abi/Pair.json'
import STACKING_ABI from '@config/abi/StackingRewards.json'
import ROUTER_SWAPS_ABI from '@config/abi/RouterSwaps.json'
import ROUTER_LIQUIDITY_ABI from '@config/abi/RouterLiquidity.json'
import MASTERCHEF_ABI from '@config/abi/MasterChef.json'

//Mumbai Addresses
const FACTORY_ADDRESS =             '0xE4095521004581521c752a130f64594A643eC961'
const ROUTER_LIQUIDITY_ADDRESS =    '0x2880E7E49EE6b5461767c235d4D0d41d4D686Cd5'
const ROUTER_SWAPS_ADDRESS =        '0xd7b7f6234Bf76fF708C2E6Ff5284500450b754Cd'
const WMATIC_ADDRESS =              '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889'
const PALMBEACH_ADDRESS =           '0xD847001DE8c99b0e5DEDb86F479EfFBF9Ce6A5De'
const COFFEE_ADDRESS =              '0x86009d87856cB313bB7DE0786872583700FDfDaB'
const STAKING_REWARDS_ADDRESS=      '0x61ece8E8f618Ae8eE86Cc885158278b838131E3c'
const MASTERCHEF_ADDRESS =          '0x16bcAf9B29942E4E4eC76E96334bF8E41435FE7a'
const matic=                        '0x0000000000000000000000000000000000001010'
const sushi =                       '0x729dE5A85FdeF959c9492b0d4F6004825d4a715b'
const getBlockchain = () =>
    // if (netId == NETWORK_ID) {
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

            //Contracts
            const factoryContract = new web3Provider.eth.Contract(
                FACTORY_ABI,
                FACTORY_ADDRESS
            )
            const PAIR_ADDRESS = await factoryContract.methods.getPair(PALMBEACH_ADDRESS, COFFEE_ADDRESS).call()
            const pairContract = new web3Provider.eth.Contract(
                PAIR_ABI,
                PAIR_ADDRESS
            )
            const routerSwapsContract = new web3Provider.eth.Contract(
                ROUTER_SWAPS_ABI,
                ROUTER_SWAPS_ADDRESS
            )
            const routerLiquidityContract = new web3Provider.eth.Contract(
                ROUTER_LIQUIDITY_ABI,
                ROUTER_LIQUIDITY_ADDRESS
            )
            const coffeeContract = new web3Provider.eth.Contract(
                COFFEE_ABI,
                COFFEE_ADDRESS
            )
            const palmBeachContract = new web3Provider.eth.Contract(
                PALMBEACH_ABI,
                PALMBEACH_ADDRESS
            )

            const stakingContract = new web3Provider.eth.Contract(
                STACKING_ABI,
                STAKING_REWARDS_ADDRESS
                
            )

                        const masterchefContract = new web3Provider.eth.Contract(
                MASTERCHEF_ABI.abi,
                MASTERCHEF_ADDRESS
                
            )
            //const res = await masterchefContract.methods.poolInfo('1000','0x1887b412284a0A7DB0849af432941D760F30eC9a',true)
// const add = await masterchefContract.methods.add('1000','0x1887b412284a0A7DB0849af432941D760F30eC9a',true)
// .send({ from: '0x702e010C9AadE083Df58F80AeF7A40f9D116216c', gas: 0, value: 0 })
// .on('transactionHash', function (hash) {
//   console.log("Executing...");
// })
// .on('receipt', function (receipt) {
//   console.log("Success.")
// })
// .catch((revertReason) => {
//   console.log("ERROR! Transaction reverted: " + revertReason.receipt.transactionHash)
// });


            resolve({
                accounts,
                addresses,
                coffeeContract,
                palmBeachContract,
                factoryContract,
                routerSwapsContract,
                routerLiquidityContract,
                stakingContract,
                web3Provider,
                FACTORY_ADDRESS,
                ROUTER_LIQUIDITY_ADDRESS,
                ROUTER_SWAPS_ADDRESS,
                PALMBEACH_ADDRESS,
                COFFEE_ADDRESS,
                STAKING_REWARDS_ADDRESS

            });

            return ({
                accounts,
                addresses,
                coffeeContract,
                palmBeachContract,
                factoryContract,
                routerSwapsContract,
                routerLiquidityContract,
                stakingContract,
                web3Provider,
                FACTORY_ADDRESS,
                ROUTER_LIQUIDITY_ADDRESS,
                ROUTER_SWAPS_ADDRESS,
                PALMBEACH_ADDRESS,
                COFFEE_ADDRESS,
                STAKING_REWARDS_ADDRESS
            });
        } else if (!provider) {
            alert('Install Metamask');
        }
        reject('Install Metamask');
    })

export default getBlockchain;
