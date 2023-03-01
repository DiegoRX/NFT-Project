import { useAuth } from 'hooks/useAuth';
import Header from '../Header/Header';
import Nav from 'common/Nav';
import PublicHeader from 'common/PublicHeader';
import { useRouter } from 'next/router';

export default function MainLayout({ children }) {
  const auth = useAuth();
  const router = useRouter();
  const route = router.pathname.substring(1);
  return (
    <>
      <div className="min-h-full">
        {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <></> : <Header />}
        {/* {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <></> : <Nav />} */}
        {!route || route === 'login' || route === 'login/register' || route === 'staking' || route === 'mint' ? <PublicHeader /> : <></>}
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}
