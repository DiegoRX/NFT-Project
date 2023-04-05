import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

function useFetch(endpoint) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [cookie, setCookie] = useState(null);
  async function getCookie() {
    const token = await Cookie.get();
  
      setCookie(token.token);

  }
  const headers = {
    Authorization: `Bearer ${cookie}`,
  };
  useEffect(() => {
    setLoading('loading...')
    setData(null);
    setError(null);
    getCookie();
    axios.get(endpoint, { headers })
    .then(res => {
      setLoading(false);
          setData(res)

          //checking for multiple responses for more flexibility 
          //with the url we send in.
          // res.data.content && setData(res.data.content);
          // res.content && setData(res.content);
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
  }, [endpoint])
if(data != null){

  return { data }
}
}
export default useFetch;
// const useFetch = (endpoint) => {
//   // const [data, setData] = useState(null);

//   async function fetchData() {
//     const response = await axios.get(endpoint, { headers });

//   }
//   async function getCookie() {
//     const token = await Cookie.get();
//     if (token != undefined) {
//       setCookie(token.token);
//       try {
//         fetchData();
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }
//   const headers = {
//     Authorization: `Bearer ${cookie}`,
//   };

//   getCookie();

// };

// export default useFetch;
