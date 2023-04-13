/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = auth?.user?.email;
    const password = passwordRef.current.value;

    auth
      .signIn(email, password)
      .then(() => {
        router.push('/dashboard');
      })
      .catch(() => {
        new Error('Login error');
      });
  };
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) router.push('/dashboard');
    }
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className=" nft-container w-lg h-3/4 p-6  border border-gray rounded-lg shadow bg-mainDark dark:border-gray-700 ">
          <div className="h-full flex items-center item1">
            <div className="flex flex-col h-56 justify-around">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign in to your account</h2>
              </div>
              <form className="h-auto items-center" onSubmit={submitHandler}>
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      defaultValue={auth?.user?.email}
                      required
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      ref={emailRef}
                      readOnly
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
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                      ref={passwordRef}
                    />
                  </div>
                </div>
              </form>
              <div>
                <button
                  onClick={submitHandler}
                  className="group relative w-full flex justify-center py-2 px-4  border-transparent text-lg font-medium rounded-md text-white bg-rojo1 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center item2">
            <Image width={50} height={50} className="mx-auto h-56 w-auto items-center" src="https://nft-project-vert.vercel.app/rojo-new.png" alt="Workflow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
