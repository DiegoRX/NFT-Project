import React from "react";
import Link from "next/link";
import { useAppContext } from "context/state";
import Image from "next/image";
import StatusButton from "@components/StatusButton";

const NavBar = ({}) => {
  const { connectWallet, walletAddress, onWalletConnectedCallback } =
    useAppContext();

  return (
    <nav className="nav-container">
      <menu className="nav-menu">
        <Link href="/">
          <Image alt="NFT" width={50} height={50} src={"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"} />
        </Link>
      </menu>
      <div>
        <Link href="/login">
          <button className="ui bg-indigo-600 button">Login</button>
        </Link>
        {/* {walletAddress.length > 0 ? (
                <button className='ui positive button' style={{height: '45px'}}>{walletAddress[0].slice(0, 6)}...{walletAddress[0].slice(-4)}</button>
        ) : (
<button className='ui positive button' onClick={connectWallet} >Connect Wallet</button>
        )} */}
      </div>
    </nav>
  );
};

export default NavBar;

// import React, { Component, useState } from 'react'
// import Link from 'next/link'
// import { Menu, Segment } from 'semantic-ui-react'

// const NavBar = ({ }) => {
//   const [activeItem, setActiveItem] = useState('home')

//   const handleItemClick = (e, { name }) => {
//     setActiveItem(name)
//   }

//   return (
//     <nav className='nav-container'>
//       {/* <menu>
//                 Home</Link>
//                 <Link href='/farms'>Farms</Link>
//                 <Link href='/staking'>Staking</Link>
//             </menu> */}
//       <Menu pointing secondary style={{ margin: 0 }}>
//         <Link href='/'><Menu.Item
//           name='home'
//           active={activeItem === 'home'}
//           onClick={handleItemClick}
//         /></Link>
//         <Link href='/farms'>
//           <Menu.Item
//             name='Farms'
//             active={activeItem === 'Farms'}
//             onClick={handleItemClick}
//           /></Link>
//         <Link href='/staking'>
//           <Menu.Item
//             name='Staking'
//             active={activeItem === 'Staking'}
//             onClick={handleItemClick}
//           /></Link>
//       </Menu>
//       <button className='ui positive button' >Connect Wallet</button>
//     </nav>
//   )
// }

// export default NavBar
