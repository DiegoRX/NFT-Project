import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

const usePut = (endpoint,payload) => {
  const [data, setData] = useState();
  const [cookie, setCookie] = useState(null);
  async function getCookie() {
    const token = await Cookie.get();

    setCookie(token.token);
  }
  const headers = {
    Authorization: `Bearer ${cookie}`,
  };
  
  
  async function putData() {
    const response = await axios.put(endpoint,payload, { headers });
    setData(response.data);
  }
  
  useEffect(() => {
    getCookie();
    try {
        putData();
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return data;
};

export default usePut;
