import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Grid, Segment, Container } from "semantic-ui-react";
import { useAppContext } from "context/state";
import TwitterCard from "@components/TwitterCard";
import Image from "next/image";

const Home = () => {
  const { connectWallet, walletAddress, stakedBalance, earned, getRewards } =
    useAppContext();
  return <div>Home</div>;
};

export default Home;
