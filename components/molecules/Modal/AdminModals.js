/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useRef, useState } from 'react';
import { Modal } from 'utils/model_utils';
import Cookie from 'js-cookie';
import contractABI from '@context/contractABI.json';
import Image from 'next/image';
import endPoints from 'services/api';
import axios from 'axios';
import getBlockchain from '@context/ethereum';
import detectEthereumProvider from '@metamask/detect-provider';
//opening modal in a global scope
const AdminModal = () => {
  const openNFTModal = (payload, usePut) => {
    Modal.open({
      title: '',
      component: NFTModal,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },
        data: payload,
        usePut: usePut,
        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: payload,
            },
            0
          );
        },
      },
    });
  };
  const openUserModal = (payload) => {
    Modal.open({
      title: '',
      component: UserModal,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },
        data: () => payload,
        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: payload,
            },
            0
          );
        },
      },
    });
  };
  const openNewUserModal = () => {
    Modal.open({
      title: '',
      component: NewUserModal,
      props: {
        callback: () => {
          //closes the modal
          Modal.close();
        },

        update: () => {
          //update the current modal props any where from the application using
          //this methods
          Modal.updateProps(
            {
              data: '',
            },
            0
          );
        },
      },
    });
  };

  const NewUserModal = () => {
    const walletAddressRef = useRef(null);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const addressRef = useRef(null);
    const cityRef = useRef(null);
    const countryRef = useRef(null);
    const passwordRef = useRef(null);
    const auth = useAuth();

    const submitHandler = async (event) => {
      event.preventDefault();
      const walletAddress = walletAddressRef.current.value;
      const email = emailRef.current.value;
      const name = nameRef.current.value;
      const phone = phoneNumberRef.current.value;
      const password = passwordRef.current.value;
      const city = cityRef.current.value;
      const country = countryRef.current.value;
      const address = addressRef.current.value;
      const data = {
        walletAddress,
        email,
        password,
        name,
        role: 'admin',
        address,
        phone,
        city,
        country,
      };

      auth.register(data);
    };

    return (
      <>
        <div className="flex flex-column justify-center h-full m-auto" style={{ maxWidth: '330px' }}>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Register New Admin User</h2>
          <form className="h-auto items-center" onSubmit={submitHandler}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md h-full shadow-sm -space-y-px">
              <div className="">
                <label htmlFor="wallet-address" className="sr-only">
                  Wallet Address
                </label>
                <input
                  id="wallet-address"
                  name="wallet-address"
                  type="string"
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Wallet Address"
                  ref={walletAddressRef}
                  required
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                  ref={emailRef}
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="string"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  ref={nameRef}
                />
              </div>
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Número Telefónico
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="number"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                  ref={phoneNumberRef}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  ref={passwordRef}
                />
              </div>
              <div>
                <input
                  id="address"
                  name="address"
                  type="string"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Address"
                  ref={addressRef}
                />
              </div>
              <div>
                <label htmlFor="city" className="sr-only">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="string"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="City"
                  ref={cityRef}
                />
              </div>
              <div>
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="string"
                  required
                  className="appearance-none text-white bg-zinc-700 my-2 rounded relative block w-full px-3 py-2 border border-gray placeholder-gray-400 text-zinc-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Country"
                  ref={countryRef}
                />
              </div>
            </div>
          </form>
          <div>
            <button
              onClick={submitHandler}
              className="group relative w-full flex justify-center py-2 px-4  border-transparent text-lg font-medium rounded-md text-black bg-mainDark hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </div>
      </>
    );
  };
  const NFTModal = ({ data, update, enableBottomSheet = false }) => {
    const nft = data;
    const [cookie, setCookie] = useState(null);
    const [enabled, setEnabled] = useState(nft.available);
    const [account, setAccount] = useState(null);
    const [NFTContract, setNFTContract] = useState(null);
    async function getCookie() {
      const token = await Cookie.get();

      setCookie(token.token);
    }
    const headers = {
      Authorization: `Bearer ${cookie}`,
    };

    async function putData(endpoint, payload) {
      const response = await axios.put(endpoint, payload, { headers });
      setEnabled(response.data.available);
      update();
    }

    // eslint-disable-next-line no-unused-vars
    const setAvailable = () => {
      const endPoint = endPoints.NFTS.putNFT(nft.id);
      const payload = {
        available: !enabled,
      };
      putData(endPoint, payload);
    };
    // eslint-disable-next-line no-unused-vars
    const handleWithdraw = async () => {
      if (account[0] != null) {
        let provider = await detectEthereumProvider();
        if (provider) {
          const web3Provider = new Web3(window.ethereum);

          const options = {
            from: account[0],
            gas: web3Provider.utils.toWei('1000000', 'wei'),
            value: '0',
          };

          const response = await NFTContract.methods
            .withdrawMoney()
            .send(options)
            .on('transactionHash', function () {
              console.log('Executing...');
            })
            .on('receipt', function (receipt) {
              console.log('Success.', receipt);
            })
            .catch((revertReason) => {
              console.error('ERROR! Transaction reverted: ' + revertReason.receipt.transactionHash);
              console.log('Received: ', response);
            });
        }
      } else {
        alert('Please login');
      }
    };
    useEffect(() => {
      async function initNFTContract() {
        const { accounts } = await getBlockchain();
        setAccount(accounts);
        console.log(accounts);
        let provider = await detectEthereumProvider();

        if (provider) {
          const web3Provider = new Web3(window.ethereum);
          let factoryContract = new web3Provider.eth.Contract(contractABI, nft.address);
          setNFTContract(factoryContract);
          // const earned = await NFTContract.methods
          // .withdrawMoney()
          console.log(factoryContract);
        }
      }
      initNFTContract();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
      getCookie();
    }, [data, enabled]);
    if (nft) {
      return (
        <div
          className=""
          style={{
            position: 'relative',
            height: '100%',
            width: '100%',
          }}
        >
          <div className="inline-flex items-center justify-center" style={{ width: '100%', height: '50%' }}>
            <div style={{ width: '50%', paddingRight: '2%' }}>
              <h2 className="text-2xl font-bold text-white capitalize">NFT Info</h2>
              <div className="justify-between flex text-white">
                <span>Nombre:</span> {nft.name}
              </div>
              <div className="justify-between flex text-white">
                <span>Id:</span> {nft.id}
              </div>
              <div className="justify-between flex text-white">
                <span>Descripción:</span>
                </div>
                <div className="justify-between flex text-white">
                {nft.description}
              </div>

              <div className="justify-between flex text-white">
                <span>Precio:</span>
                ${nft.price}
              </div>
              {/* <div className="justify-between flex text-white">
                <span>Available:</span>
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                  <input type="checkbox" className="sr-only peer" checked={enabled} readOnly />
                  <button
                    tabindex={0}
                    onClick={() => {
                      setAvailable();
                    }}
                    className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-gray-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"
                  ></button>
                </label>
              </div> */}
              <div className="justify-between flex text-white">
                <span>Tokens Minteados:</span> {nft.mintedNFT}
              </div>
              {/* <div className="justify-between flex text-white">
                <span>BNB colected:</span> 0
              </div> */}
              {/* <div className="justify-between flex text-white">
                <button onClick={() => handleWithdraw()} className="inline-flex  bg-rojo1 justify-center hover:bg-transparent text-white font-bold py-3 px-5 rounded items-center text-center">
                  Retirar ganacias
                </button>
              </div> */}
            </div>
            <div className="content" style={{ width: '50%' }}>
              <Image width={1000} height={1000} src={nft.image} alt="" style={{ width: '100%' }} />
              <div className="justify-between flex text-white" style={{ wordBreak: 'break-word' }}>
                {nft.address}
              </div>
            </div>
          </div>
          <div className="justify-between" style={{ width: '100%' }}>
            <h2 className="text-2xl font-bold text-white capitalize">Información de Inversores</h2>
            <div style={{ overflow: 'scroll', height: '170px' }}>
              {nft?.nfts?.map((nft, i) => (
                <div key={i}>
                  {nft.user != null ? (
                    <div>
                      <div className="justify-between flex text-white">Token Id: {nft.tokenId}</div>
                      <div className="justify-between flex text-white">
                        <span>Email:</span> {nft?.user?.email}
                      </div>
                      <div className="justify-between flex text-white">
                        <span>Nombre:</span> {nft?.user?.name}
                      </div>
                      <div className="justify-between flex text-white">
                        <span>Dirección de Wallet: </span> {nft?.user?.walletAddress}
                      </div>
                      <div className="justify-between flex text-white">
                        <span>Rol:</span> {nft?.user?.role}
                      </div>
                      <hr style={{ width: '100%', color: 'white' }} />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div
            className="modal__bottom"
            style={{
              position: enableBottomSheet ? 'fixed' : 'absolute',
            }}
          >
            {/* <Button type="primary" style={{ marginRight: '10px' }} onClick={update}>
            update props
          </Button> */}
            {/* <Button type="primary" danger onClick={callback}>
            Cancel
          </Button> */}
          </div>
        </div>
      );
    }
  };
  const UserModal = ({ data, enableBottomSheet = false }) => {
    const user = data();
    const nfts = user.nfts;
    return (
      <div
        className=""
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
        }}
      >
        <div>
          <div className="justify-between flex text-white">
            <span>User Id:</span> {user.id}
          </div>
          <div className="justify-between flex text-white">
            <span>Email:</span> {user.email}
          </div>
          <div className="justify-between flex text-white">
            <span>Name:</span> {user.name}
          </div>
          <div className="justify-between flex text-white">
            <span>walletAddress: </span> {user.walletAddress}
          </div>
          <div className="justify-between flex text-white">
            <span>Phone:</span> {user.phone}
          </div>
          <div className="justify-between flex text-white">
            <span>Role:</span> {user.role}
          </div>
          <div className="justify-between flex text-white">
            <span>City:</span> {user.city}
          </div>
          <div className="justify-between flex text-white">
            <span>Country:</span> {user.country}
          </div>
          <div className="justify-between flex text-white">
            <span>Address:</span> {user.address}
          </div>
          <hr style={{ width: '100%', color: 'white' }} />
        </div>

        <div className="justify-between" style={{ width: '100%' }}>
          <h2 className="text-2xl font-bold text-white capitalize">Holders Info</h2>
          <div style={{ overflow: 'scroll', height: '350px' }}>
            {nfts.map((nft, i) => (
              <div key={i} className="inline-flex items-center justify-center" style={{ width: '100%', height: '50%' }}>
                <div style={{ width: '50%', paddingRight: '2%' }}>
                  <h2 className="text-2xl font-bold text-white capitalize">NFT Info</h2>
                  <div className="justify-between flex text-white">
                    <span>Name:</span> {nft.name}
                  </div>
                  <div className="justify-between flex text-white">
                    <span>Id:</span> {nft.id}
                  </div>
                  <div className="justify-between flex text-white">
                    <span>Description:</span>
                    {nft.description}
                  </div>

                  <div className="justify-between flex text-white">
                    <span>Price:</span>
                    {nft.price}
                  </div>
                  <div className="justify-between flex text-white">
                    <span>Available:</span>
                    {nft.available.toString()}
                  </div>
                </div>
                <div className="content" style={{ width: '50%' }}>
                  <Image width={50} height={50} src={nft.image} alt="" style={{ width: '100%' }} />
                  <div className="justify-between flex text-white" style={{ wordBreak: 'break-word' }}>
                    {nft.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="modal__bottom"
          style={{
            position: enableBottomSheet ? 'fixed' : 'absolute',
          }}
        >
          {/* <Button type="primary" style={{ marginRight: '10px' }} onClick={update}>
            update props
          </Button> */}
          {/* <Button type="primary" danger onClick={callback}>
            Cancel
          </Button> */}
        </div>
      </div>
    );
  };
  return { openNFTModal, openUserModal, openNewUserModal };
};

export default AdminModal;
