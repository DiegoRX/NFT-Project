/* eslint-disable no-unused-vars */
import React, { useState, useContext, createContext, useEffect } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from 'services/api/';
import AuthData from '@components/common/interfaces/AuthData.interface';
import { useRouter } from 'next/router';

const AuthContext: React.Context<any> = createContext('light');

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const getUser = async (address) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    try {
      const resp = await axios.get(endPoints.users.getUserByWalletAddress + address);
      setUser(resp);
      return switchCase(resp);
    } catch (error) {
      return switchCase(error.request);
    }
  };

  const register = async (payload) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };

    try {
      const resp = await axios.post(endPoints.users.postUsers, payload);
      return switchCase(resp);
    } catch (error) {
      return switchCase(error.request);
    }
  };
  const signIn = async (email, password) => {
    // eslint-disable-next-line no-unused-vars
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(endPoints.auth.login, { email, password });
    const userData: AuthData = data.user;
    setUser(userData);
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    if (data) {
      const token = data.access_token;
      Cookie.set('token', token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
      }
    }
  };
  useEffect(() => {
    const setUserIf = () => {
      if (typeof window !== 'undefined') {
        const userString = localStorage.getItem('user');
        if (userString != null) {
          const user = JSON.parse(userString);
          setUser(user);
        }
        const accountsString = localStorage.getItem('accounts');
        if (accountsString != null) {
          const accounts = JSON.parse(accountsString);
          setAccounts(accounts);
        }
      }
    };
    setUserIf();
  }, []);
  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    setAccounts([]);
    delete axios.defaults.headers.Authorization;
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    router.push('/');
  };

  const switchCase = (resp) => {
    const { status } = resp;
    const respuesta = {
      data: resp.data,
      status: 0,
      mensaje: '',
    };
    switch (status) {
      case 200:
        respuesta.status = 200;
        return respuesta;
      case 201:
        respuesta.status = 201;
        respuesta.mensaje = 'Registro exitoso';
        return respuesta;
      case 202:
        respuesta.status = 202;
        respuesta.mensaje = 'Acepted';
        return respuesta;
      case 400:
        respuesta.status = 400;
        respuesta.mensaje = JSON.parse(resp.responseText).message || 'Registro duplicado';
        return respuesta;
      case 401:
        respuesta.status = 401;
        respuesta.mensaje = 'Acceso no autorizado';
        return respuesta;
      case 404:
        respuesta.status = 404;
        respuesta.mensaje = 'Ruta no encontrada';
        return respuesta;
      case 500:
        respuesta.status = 500;
        respuesta.mensaje = 'Error en el servidor';
        return respuesta;
      default:
        break;
    }
  };
  return {
    user,
    signIn,
    register,
    logout,
    accounts,
    setAccounts,
    getUser,
    setUser,
  };
}
