const API = process.env.NEXT_PUBLIC_API_URL;


const endPoints = {
  products:{
    getProducts: `${API}/products/`,
    postProducts: `${API}/products/`,
    getProducts: (limit, offset) => `${API}/products?limit=${limit}&offset=${offset}`,
    putProducts: (id) => `${API}/products/${id}`,
    deleteProducts: (id) => `${API}/products/${id}`
  },
  users:{
    getUsers: `${API}/users`,
    postUsers: `${API}/users`,
    getUserByWalletAddress: `${API}/users/address/`,
  },  
  auth: {
    login: `${API}/auth/login`,
    profile: `${API}/auth/profile`
  },
  categories:{
    getCategories: `${API}/categories`,
    postCategories: `${API}/categories`,
    getCategoriesProduct: (id) => `${API}/categories/${id}/products`,
    putCategories: (id) => `${API}/categories/${id}`,
  },
  files:{
    postFiles: `${API}/files/upload`,
    getFiles: (fileName) => `${API}/${fileName}`
  }
  
}

export default endPoints