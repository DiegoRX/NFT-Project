import endPoints from 'services/api';
import useFetch from 'hooks/useFetch';
import { Chart } from 'common/Chart';
import { useAuth } from 'hooks/useAuth';
import AuthData from 'common/interfaces/AuthData.interface';

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
    <>
      <div className="bg-white rounded-lg shadow-lg p-6">
  <h2 className="text-lg font-medium mb-4">Profile</h2>
  <dl className="divide-y divide-gray-200">
    <div className="py-4">
      <dt className="font-medium text-gray-500">Name</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.name}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Email</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.email}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Wallet Address</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.walletAddress}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Phone</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.phone}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Address</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.address}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">City</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.city}</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Country</dt>
      <dd className="mt-1 text-gray-900">{  auth?.user?.country}</dd>
    </div>
  </dl>
</div>






    </>
  );
}
