import endPoints from 'services/api';
import useFetch from 'hooks/useFetch';
import { Chart } from 'common/Chart';
import { useAuth } from 'hooks/useAuth';
import Link from 'next/link';

const PRODUCT_LIMIT = 60;
const PRODUCT_OFFSET = 60;

export default function Mint() {
  const auth = useAuth();
  console.log(auth);
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFFSET));

  const categoryNames = products?.map((product) => product.category);
  const categoryCount = categoryNames?.map((category) => category.name);

  const countOccurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-14 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <div className="sm:columns-1 md:columns-2 ">
            <div>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Start Minting</h1>
              <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorem rerum aspernatur dignissimos, molestias dicta rem.
              </p>
              <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link href="#" className="inline-flex bg-zinc-500 justify-center hover:bg-zinc-700 text-white font-bold py-3 px-5 rounded items-center text-center">
                  Mint NFT
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
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
