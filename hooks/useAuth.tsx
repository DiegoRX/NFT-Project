import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from 'services/api/';
import AuthData from 'common/interfaces/AuthData.interface';

const AuthContext: React.Context<any>  = createContext('light');

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const getUser = async (address) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.get(endPoints.users.getUserByWalletAddress+address);
if(data){
  setUser(data)
  return data
}
  };

  const register = async (payload) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.users.postUsers, payload);
console.log(data)
  };
  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.auth.login, { email, password });
    const userData : AuthData = data.user
    setUser(userData);
    if (data) {
      const token = data.access_token;
      Cookie.set('token', token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      console.log(user);
    }
  };
  const logout = () => {
      window.location.href = '/';
    Cookie.remove('token');
    setUser(null);
    setAccounts([])
    delete axios.defaults.headers.Authorization;
  };

  return {
    user,
    signIn,
    register,
    logout,
    accounts,
    setAccounts,
    getUser
  };
}
