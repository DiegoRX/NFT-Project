import { useAuth } from 'hooks/useAuth';
import Header from '../Header/Header';
import Nav from 'common/Nav';
import PublicHeader from 'common/PublicHeader';
import { useRouter } from 'next/router';
import AuthData from 'common/interfaces/AuthData.interface';

export default function MainLayout({ children }) {
  const auth: AuthData = useAuth();
  const router = useRouter();
  const route = router.pathname.substring(1);
  return (
    <>
      <div className="h-screen">
        {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <></> : <Header />}
        {/* {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <></> : <Nav />} */}
        {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <PublicHeader /> : <></>}
        <main className='h-auto bg-gray-900'>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-gray-900">{children}</div>
        </main>
      </div>
    </>
  );
}
