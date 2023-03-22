import endPoints from 'services/api';
import useFetch from 'hooks/useFetch';
import { Chart } from '@components/common/Chart';
import { useAuth } from 'hooks/useAuth';
import AuthData from '@components/common/interfaces/AuthData.interface';

const PRODUCT_LIMIT = 60;
const PRODUCT_OFFSET = 60;

export default function profile() {
  const auth: AuthData = useAuth();

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
    <div className='h-full '>
      <div className="bg-mainDark rounded-lg shadow-lg mt-24 mb-44 p-6">
  <h2 className="text-lg font-medium mb-4">Profile</h2>
  <dl className="divide-y divide-gray-200">
    <div className="py-4">
      <dt className="font-medium text-white">Name</dt>
      <dd className="mt-1 text-white">{  auth?.user?.name}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-white">Email</dt>
      <dd className="mt-1 text-white">{  auth?.user?.email}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-white">Wallet Address</dt>
      <dd className="mt-1 text-white">{  auth?.user?.walletAddress}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-white">Phone</dt>
      <dd className="mt-1 text-white">{  auth?.user?.phone}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-white">Address</dt>
      <dd className="mt-1 text-white">{  auth?.user?.address}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-white">City</dt>
      <dd className="mt-1 text-white">{  auth?.user?.city}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-white">Country</dt>
      <dd className="mt-1 text-white">{  auth?.user?.country}</dd>
    </div>
  </dl>
</div>
    </div>
  );
}
