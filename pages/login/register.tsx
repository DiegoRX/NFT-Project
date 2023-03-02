import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import getBlockchain from '@context/ethereum';
import AuthData from 'common/interfaces/AuthData.interface';

const Login = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const addressRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const passwordRef = useRef(null);
  const auth: AuthData = useAuth();
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    const walletAddress = auth?.accounts[0];
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const phone = phoneNumberRef.current.value;
    const address = addressRef.current.value;
    const city = cityRef.current.value;
    const country = countryRef.current.value;
    const password = passwordRef.current.value;
    auth
      .register({
        walletAddress,
        email,
        password,
        name,
        role: 'customer',
        address,
        phone,
        city,
        country,
      })
      .then(
        auth
        .signIn(email, password)
        .then(() => {
          router.push('/dashboard');
        })
 
      );
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Regístrate con una nueva cuenta</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="wallet-address" className="sr-only">
                  Wallet Address
                </label>
                <input
                  id="wallet-address"
                  name="wallet-address"
                  type="string"
                  autoComplete="string"
                  value={auth?.accounts[0]}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Wallet Address"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="string"
                  autoComplete="string"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  ref={nameRef}
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Número Telefónico
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="number"
                  autoComplete="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                  ref={phoneNumberRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>

              <div>
                <input
                  id="address"
                  name="address"
                  type="string"
                  autoComplete="string"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  ref={addressRef}
                />
              </div>
              <div>
                <label htmlFor="city" className="sr-only">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="string"
                  autoComplete="string"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="City"
                  ref={cityRef}
                />
              </div>
              <div>
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="string"
                  autoComplete="string"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Country"
                  ref={countryRef}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Regístrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
