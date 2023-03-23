import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import getBlockchain from '@context/ethereum';
import AuthData from '@components/common/interfaces/AuthData.interface';

const register = () => {
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
        auth.signIn(email, password).then(() => {
          router.push('/dashboard');
        })
      );
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className=" two-columns w-lg h-3/4 p-6  border border-gray rounded-lg shadow bg-mainDark dark:border-gray-700 ">
          <div className="h-full flex items-center">
            <div className="flex flex-col h-3/4 justify-around">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Wellcome to ROJO FUNDADOR Platform</h2>
              </div>
              <form className="h-auto items-center" onSubmit={submitHandler}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md h-full shadow-sm -space-y-px">
                  <div className="">
                    <label htmlFor="wallet-address" className="sr-only">
                      Wallet Address
                    </label>
                    <input
                      id="wallet-address"
                      name="wallet-address"
                      type="string"
                      autoComplete="string"
                      value={auth?.accounts[0]}
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Country"
                      ref={countryRef}
                    />
                  </div>
                </div>
              </form>
              <div>
                <button
                  onClick={submitHandler}
                  className="group relative w-full flex justify-center py-2 px-4  border-transparent text-lg font-medium rounded-md text-white bg-rojo1 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center">
            <img className="mx-auto h-56 w-auto items-center" src="https://sharktech-nft.vercel.app/rojo-logo.png" alt="Workflow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
