import { useAuth } from 'hooks/useAuth';
import AuthData from '@components/common/interfaces/AuthData.interface';

export default function useProfile() {
  const auth: AuthData = useAuth();
  return (
    <div className="h-screen ">
      <div className="bg-mainDark rounded-lg shadow-lg mt-2  p-6 h-full m-auto" style={{ maxWidth: '550px' }}>
        <h2 className="text-lg text-white">Profile</h2>
        <dl className="divide-y divide-gray-200">
          <div className="py-4">
            <dt className="font-medium text-white">Name</dt>
            <dd className="mt-1 text-white">{auth?.user?.name}</dd>
          </div>
          <div className="py-4">
            <dt className="font-medium text-white">Email</dt>
            <dd className="mt-1 text-white">{auth?.user?.email}</dd>
          </div>
          <div className="py-4">
            <dt className="font-medium text-white">Wallet Address</dt>
            <dd className="mt-1 text-white">{auth?.user?.walletAddress}</dd>
          </div>
          {/* <div className="py-4">
            <dt className="font-medium text-white">Phone</dt>
            <dd className="mt-1 text-white">{auth?.user?.phone}</dd>
          </div>
          <div className="py-4">
            <dt className="font-medium text-white">Address</dt>
            <dd className="mt-1 text-white">{auth?.user?.address}</dd>
          </div>
          <div className="py-4">
            <dt className="font-medium text-white">City</dt>
            <dd className="mt-1 text-white">{auth?.user?.city}</dd>
          </div>
          <div className="py-4">
            <dt className="font-medium text-white">Country</dt>
            <dd className="mt-1 text-white">{auth?.user?.country}</dd>
          </div> */}
        </dl>
      </div>
    </div>
  );
}
