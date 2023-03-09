import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [cookie, setCookie] = useState(null);
  async function getCookie() {
    const token = await Cookie.get();
    setCookie(token.token);
  }
  getCookie();
  const headers = {
    Authorization: `Bearer ${cookie}`,
  };


  async function fetchData() {
    const response = await axios.get(endpoint, { headers });
    setData(response.data);
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return data;
};

export default useFetch;
