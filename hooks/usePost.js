import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookie from 'js-cookie';

const usePost = (endpoint) => {
  const [data, setData] = useState([]);
  const [cookie, setCookie] = useState(null);
  async function getCookie() {
    const token = await Cookie.get();

    setCookie(token.token);
  }
  const headers = {
    Authorization: `Bearer ${cookie}`,
  };
  
  
  async function postData() {
    const response = await axios.post(endpoint, { headers });
    setData(response.data);
  }
  
  useEffect(() => {
    getCookie();
    try {
        postData();
    } catch (error) {
      console.log(error);
    }
  }, [data]);

  return data;
};

export default usePost;
