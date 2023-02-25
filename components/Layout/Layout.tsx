import { useAuth } from 'hooks/useAuth';
import Header from '../Header/Header';
import Nav from 'common/Nav';

export default function MainLayout({ children }) {
  const auth = useAuth();
  return (
    <>
      <div className="min-h-full">
        {(auth.user)?<Header />:<></>}
        <Nav />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </>
  );
}