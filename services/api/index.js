/* eslint-disable no-dupe-keys */
const API = 'https://gentle-tor-96590.herokuapp.com';

const endPoints = {
  products: {
    getProducts: `${API}/products/`,
    postProducts: `${API}/products/`,
    getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
    putProducts: (id) => `${API}/products/${id}`,
    deleteProducts: (id) => `${API}/products/${id}`,
  },
  users: {
    getUsers: `${API}/users`,
    postUsers: `${API}/users`,
    getUserByWalletAddress: `${API}/users/address/`,
  },
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/auth/profile`,
  },
  NFTS: {
    getNFTS: `${API}/nft`,
    getNFT: (id) => `${API}/nft/${id}`,
    getNFTSUsers: `${API}/unique-nft`,
    getNFTUnique: (id) => `${API}/unique-nft/${id}`,
    postNFTS: `${API}/nft`,
    getNFTSProduct: (id) => `${API}/nft/${id}/user`,
    putNFT: (id) => `${API}/nft/${id}`,
    putNFTUnique: (id) => `${API}/unique-nft/${id}`,
  },
  files: {
    postFiles: `${API}/files/upload`,
    getFiles: (fileName) => `${API}/${fileName}`,
  },
};

export default endPoints;
