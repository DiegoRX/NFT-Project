import { Fragment } from 'react';
import { useAuth } from 'hooks/useAuth';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import AuthData from '@components/common/interfaces/AuthData.interface';
import Image from 'next/image';

const navigation = [{ name: 'Dashboard', href: '/dashboard', current: false }];
const userNavigation = [{ name: 'Your Profile', href: '/profile' }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const auth: AuthData = useAuth();

  const userData = {
    name: auth?.user?.name,
    email: auth?.user?.email,
    imageUrl: `https://ui-avatars.com/api/?name=${auth?.user?.name}`,
  };
  return (
    <>
      <Disclosure as="nav" className="bg-header">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/dashboard">
                      <Image width={50} height={50} className="h-8 w-8" src="https://sharktech-nft.vercel.app/rojo-logo.png" alt="Workflow" />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(item.current ? 'bg-mainDark text-white' : 'text-white hover:bg-black hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {auth?.user?.role === 'admin' ? (
                        <Link
                          href="/dashboard/admin"
                          // eslint-disable-next-line no-constant-condition
                          className={classNames(false ? 'bg-mainDark text-white' : 'text-white hover:bg-black hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
                          aria-current={undefined}
                        >
                          Admin
                        </Link>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    {auth?.accounts ? (
                      <button className="text-white bg-rojo1  hover:bg-black focus:ring-4 focus:outline-none focus:bg-mainDark font-medium rounded-lg text-sm px-5 py-2 text-center mr-3 md:mr-0 ">
                        {auth?.accounts[0]?.slice(0, 6)}...{auth?.accounts[0]?.slice(-4)}
                      </button>
                    ) : (
                      <div></div>
                    )}

                    <button type="button" className="bg-rojo1 p-1 rounded-full text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-rojo1 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-rojo1 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <Image width={50} height={50} className="h-8 w-8 rounded-full" src={userData.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Link href="/profile">
                            <button className="block px-4 py-2 text-sm text-gray-700">Profile</button>
                          </Link>
                          <button onClick={() => auth.logout()} className="block px-4 py-2 text-sm text-gray-700">
                            Logout
                          </button>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-rojo1 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(item.current ? 'bg-mainDark text-white' : 'text-white hover:bg-black hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium')}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image width={50} height={50} className="h-10 w-10 rounded-full" src={userData.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{userData.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{userData.email}</div>
                    {auth?.accounts ? (
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {' '}
                        {auth?.accounts[0]?.slice(0, 6)}...{auth?.accounts[0]?.slice(-4)}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <button type="button" className="ml-auto text-white bg-rojo1 flex-shrink-0 p-1 rounded-full text-whit hover:text-white hover:bg-black  focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {userNavigation.map((item) => (
                    <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-black">
                      {item.name}
                    </Link>
                  ))}
                  <button onClick={() => auth.logout()} className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-black">
                    Logout
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
