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
      window.location.href = '/login';
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
  };

  return {
    user,
    signIn,
    logout,
  };
}
