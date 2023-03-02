import getBlockchain from '@context/ethereum';
import { useAuth } from 'hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import AuthData from './interfaces/AuthData.interface';

export default function PublicHeader() {
  const router = useRouter();
  const route = router.pathname.substring(1);
  const auth: AuthData = useAuth();

  const connectWallet = async () => {
    const { accounts, addresses } = await getBlockchain();
    console.log(accounts, addresses);
    auth.setAccounts(accounts);

   const {data:user} = await auth.getUser(accounts[0]);
   auth.setUser(user)
   console.log(user)
   if (user === undefined) {
    router.push('/login/register');
  } else if (user?.email) {
    router.push('/login');
  }
  };

  console.log(auth?.accounts);
  return (
    <nav className="bg-gray-900 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/">
          <img className="h-12 " src="https://tailwindui.com/img/logos/workflow-mark-yellow.svg" alt="Workflow" />
        </Link>
        <div className="flex md:order-2 ml-10 flex items-baseline space-x-4">
          <Link className="text-white hover:bg-gray-700 hover:text-grey px-3 py-2 rounded-md text-sm font-medium" href="/mint">
            Mint
          </Link>
          <Link className="text-white hover:bg-gray-700 hover:text-grey px-3 py-2 rounded-md text-sm font-medium" href="/staking">
            Staking
          </Link>
          {/* {route === 'login' ? (
            <Link href="login/register">
              <button
                type="button"
                className="text-white bg-yellow hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:bg-indigo-800"
              >
                Register
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button
                type="button"
                className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:bg-indigo-600 font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:bg-indigo-800"
              >
                Login
              </button>
            </Link>
          )} */}
          {auth?.accounts && auth?.accounts.length > 0 ? (
            <Link
              href="/dashboard"
              className="text-black bg-yellow hover:bg-amber-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2 text-center mr-3"
            >
              {auth?.accounts[0]?.slice(0, 6)}...{auth?.accounts[0]?.slice(-4)}
            </Link>
          ) : (
            <button
              className="text-black bg-yellow  hover:bg-amber-700 hover:text-white font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 "
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
