/* eslint-disable no-unused-vars */
import endPoints from 'services/api';
import useFetch from 'hooks/useFetch';
import { useAuth } from 'hooks/useAuth';
import AuthData from '@components/common/interfaces/AuthData.interface';
// import Modal from '@components/common/modal/modal';
import AdminModal from '@components/molecules/Modal/AdminModals.js';
import usePut from 'hooks/usePut';
import { useState } from 'react';
import Image from 'next/image';

const Admin = () => {
  const auth: AuthData = useAuth();
  const [nfts, setNFTs] = useState(null);
  const [users, setUser] = useState(null);
  const useGetNFT = async () => {
    const nfts = await useFetch(endPoints.NFTS.getNFTS);
    setNFTs(nfts?.data?.data);
  };
  // async function withdrawMoney() {
  //   try {
  //     const response = await NFTContract.withdrawMoney();
  //     console.log('Received: ', response);
  //   } catch (err) {
  //     alert(err);
  //   }
  // }
  useGetNFT();
  const useGetUser = async () => {
    const users = await useFetch(endPoints.users.getUsers);
    setUser(users?.data?.data);
  };

  useGetUser();

  // console.log(nfts
  const { openNFTModal, openUserModal, openNewUserModal } = AdminModal();
  if (nfts != null && users != null) {
    return (
      <div className="h-screen">
        <h2 className="text-white text-2xl font-bold text-zinc-900 capitalize">Token list</h2>

        <table className="text-white border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600 ...">Id </th>
              <th className="border border-slate-600 ...">Image </th>
              <th className="border border-slate-600 ...">Name</th>
              <th className="border border-slate-600 ...">description</th>
              <th className="border border-slate-600 ...">Address</th>
              <th className="border border-slate-600 ...">Price</th>
              <th className="border border-slate-600 ...">Available</th>
              <th className="border border-slate-600 ...">Minted</th>
              <th className="border border-slate-600 ...">View</th>
            </tr>
          </thead>
          <tbody>
            {nfts.map((nft, i) => (
              <tr key={i}>
                <th className="border border-slate-600 ...">{nft.id}</th>
                <th className="border border-slate-600 ...">
                  <Image width={180} height={180} src={nft.image} alt="" />
                </th>
                <th className="border border-slate-600 ...">{nft.name}</th>
                <th className="border border-slate-600 ...">{nft.description}</th>
                <th className="border border-slate-600 ...">
                  {nft.address?.slice(0, 6)}...{nft.address?.slice(-4)}
                </th>
                <th className="border border-slate-600 ...">{nft.price}</th>
                <th className="border border-slate-600 ...">{nft.available.toString()}</th>
                <th className="border border-slate-600 ...">{nft.nfts.length}</th>
                <th className="border border-slate-600 ...">
                  <button onClick={() => openNFTModal(nft, usePut)}>
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        <h2 className="text-white text-2xl font-bold text-zinc-900 capitalize">Users Info</h2>
        <button className="text-black rounded-lg bg-mainDark" onClick={() => openNewUserModal()}>
          New user
        </button>
        <table className="text-white border-collapse border border-slate-500 w-full">
          <thead>
            <tr>
              <th className="border border-slate-600 ...">Name</th>
              <th className="border border-slate-600 ...">Email</th>
              <th className="border border-slate-600 ...">Wallet Address</th>
              <th className="border border-slate-600 ...">Role</th>
              <th className="border border-slate-600 ...">NFTs</th>
              {/* <th className="border border-slate-600 ...">View</th> */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <td className="border border-slate-700 ...">{user.name}</td>
                <td className="border border-slate-700 ...">{user.email}</td>
                <td className="border border-slate-700 ...">
                  {user.walletAddress?.slice(0, 6)}...{user.walletAddress?.slice(-4)}
                </td>
                <td className="border border-slate-700 ...">{user.role}</td>
                <td className="border border-slate-700 ...">{user.nfts.length}</td>
                {/* <th className="border border-slate-600 ...">
                  <button onClick={() => openUserModal(user)}>
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </th> */}
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Modal show={showModal} onClose={() => setShowModal(false)} targetModal="user-info" title={'modal'}>
        {'dd'}
      </Modal> */}
      </div>
    );
  }
};

export default Admin;
