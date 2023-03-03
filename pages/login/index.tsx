import React from 'react';
import { useRef } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { useAuth } from 'hooks/useAuth';
import { useRouter } from 'next/router';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const auth = useAuth();
  const router = useRouter();

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = auth.user.email;
    const password = passwordRef.current.value;
    console.log(email);
    auth
      .signIn(email, password)
      .then(() => {
        router.push('/dashboard');
      })
      .catch(() => {
        new Error('Login error');
      });
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className=" two-columns w-lg h-1/2 p-6  border border-gray rounded-lg shadow bg-zinc-800 dark:border-gray-700 ">
          <div className="h-full flex items-center">
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
                      value={auth.user.email}
                      required
                      className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                      ref={emailRef}
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
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4  border-transparent text-lg font-medium rounded-md text-black bg-yellow hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div className="flex h-full items-center">
            <img className="mx-auto h-56 w-auto items-center" src="https://sharktech-nft.vercel.app/TOVA.png" alt="Workflow" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
