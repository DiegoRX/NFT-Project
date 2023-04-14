/* eslint-disable no-unused-vars */
import { useAuth } from 'hooks/useAuth';
import Header from '../Header/Header';
import PublicHeader from '@components/common/PublicHeader';
import { useRouter } from 'next/router';
import AuthData from '@components/common/interfaces/AuthData.interface';

export default function MainLayout({ children }) {
  const auth: AuthData = useAuth();
  const router = useRouter();
  const route = router.pathname.substring(1);
  return (
    <>
      <div className="big-container">
        {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <></> : <Header />}
        {/* {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <></> : <Nav />} */}
        {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <PublicHeader /> : <></>}
        <main className="h-auto bg-mainDark">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-mainDark">{children}</div>
        </main>
      </div>
    </>
  );
}
