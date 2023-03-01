import endPoints from 'services/api';
import useFetch from 'hooks/useFetch';
import { Chart } from 'common/Chart';
import { useAuth } from 'hooks/useAuth';

const PRODUCT_LIMIT = 60;
const PRODUCT_OFFSET = 60;

export default function profile() {
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
      <div className="bg-white rounded-lg shadow-lg p-6">
  <h2 className="text-lg font-medium mb-4">Profile</h2>
  <dl className="divide-y divide-gray-200">
    <div className="py-4">
      <dt className="font-medium text-gray-500">Name</dt>
      <dd className="mt-1 text-gray-900">Contenido de la descripción 1</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Descripción 2</dt>
      <dd className="mt-1 text-gray-900">Contenido de la descripción 2</dd>
    </div>
    <div className="py-4">
      <dt className="font-medium text-gray-500">Descripción 3</dt>
      <dd className="mt-1 text-gray-900">Contenido de la descripción 3</dd>
    </div>
  </dl>
</div>






    </>
  );
}
