import React from "react";
import Link from "next/link";
import { useAppContext } from "context/state";
import Image from "next/image";

const SwapOptions = ({}) => {
  return (
    <nav className="swap-options">
      <menu className="swap-menu">
        <Link href="/dex">Swap</Link>
        <Link href="/dex/pool">Pool</Link>
      </menu>
    </nav>
  );
};

export default SwapOptions;
