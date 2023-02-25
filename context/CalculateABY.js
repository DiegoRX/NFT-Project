import detectEthereumProvider from '@metamask/detect-provider';
import { BigNumber } from "bignumber.js";

export async function CalculateABY() {
  let PAIR_ABI = require('@config/abi/Pair.json');
  let ERC20_ABI = require('@config/abi/erc20.json');
    let provider = await detectEthereumProvider();
const lpAddress = '0x6b0772e1E3Cb01AFE7B9d0E193b13718a1DeFB57'
const COFFEE_MATIC_PAIR = '0x4155f8e687437E6c9100d0dA9A6128b9f7Cc66E6' //Valor 1=1
// let tokenA
// let tokenB
// let rewardToken
if (provider) {
  const web3Provider = new Web3(window.ethereum);
//   let TokenAContract = new web3Provider.eth.Contract(ERC20_ABI, tokenAddressFrom)
  
  

// //TotalRewardTokenPricePerYear
//   const BLOCKS_PER_DAY = 43200
//   const BLOCKS_PER_YEAR = BLOCKS_PER_DAY * 365
//   let rewardTokenPrice //COFFEE price in WMATIC (Pair COFFEE-MATIC)
//   let REWARD_TOKEN_PER_BLOCK //poolInfo.allcPoint (MasterChef contract)
//   const TotalRewardTokenPricePerYear = 
//   rewardTokenPrice * REWARD_TOKEN_PER_BLOCK * BLOCKS_PER_YEAR
// //TotalPriceOfLPTokens
// let LPTokenPrice //(LPAdressContract)
// let totalLPTokensInFarmingContract//LPAdressContract.balanceOf(MasterChefAddress)
// const TotalPriceOfLPTokensInFarmingContract =
// LPTokenPrice*totalLPTokensInFarmingContract

const rewardPairContract = new web3Provider.eth.Contract(PAIR_ABI, COFFEE_MATIC_PAIR)

let reserves = await rewardPairContract.methods.getReserves().call()
console.log(reserves)


    }
  }

  