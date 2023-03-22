import { useAuth } from 'hooks/useAuth';
import getBlockchain from '@context/ethereum';
import router from 'next/router';
import AuthData from '@components/common/interfaces/AuthData.interface';

export default function Staking() {
  const auth: AuthData = useAuth();

  const connectWallet = async () => {
    const { accounts, addresses } = await getBlockchain();
    console.log(accounts, addresses);
    auth.setAccounts(accounts);

    const { data: user } = await auth.getUser(accounts[0]);
    auth.setUser(user);
    console.log(user);
    if (user === undefined) {
      router.push('/login/register');
    } else if (user?.email) {
      router.push('/login');
    }
  };

  return (
    <>
      <section className="bg-grey-900 dark:bg-mainDark h-screen">
        <div className="py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div className="sm:columns-1 md:columns-2 ">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">Stake your NFTs</h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem rerum aspernatur dignissimos, molestias dicta rem.
              </p>
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <button onClick={connectWallet} className="inline-flex bg-amber-700 justify-center hover:bg-amber-600 text-white font-bold py-3 px-5 rounded items-center text-center">
                  Stake
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="inline-flex justify-center items-center">
                <img src="https://i.pinimg.com/originals/ac/3c/5a/ac3c5ae3d80f8a7449a252dd72d551a5.gif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
