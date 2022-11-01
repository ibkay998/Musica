import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import TopChart from "../components/TopChart";
import NewRelease from "../components/NewRelease";
import PopularArea from "../components/PopularArea";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { storeWrapper } from "../store/index";
import { fetchMusic} from "../store/fetchMusicSlice";
import { useDispatch, useSelector, useStore } from "react-redux";
import { EnhancedStore } from "@reduxjs/toolkit";
import React from "react";
import {
  useGetWorldChartQuery,
} from "../store/newFetch";
import convertToObject from '../utils/convertMusicListToState'
import { motion } from "framer-motion";



const Home = ({ posts}) => {
  const store = useStore();
  // console.log({ store: store.getState() }); // posts comming from the getStaticprops
  React.useEffect(() => {
    store.dispatch(fetchMusic(posts));
  }, [posts,store]);
  const status = useSelector(state => state.fetchMusic.globalMusicState)
  if(status.length === 0){
    return 
  }

  return (
    <motion.div
      className="flex flex-col w-full overflow-y-auto hide-scrollbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full">
        <main className="flex m-5 flex-col text-white w-10/12">
          <div className="flex flex-col md:flex-row w-full justify-between">
            <Header />
            <TopChart />
          </div>
          <NewRelease />
          <PopularArea />
        </main>
      </div>
    </motion.div>
    
  );
};

export const getServerSideProps= storeWrapper.getStaticProps(
  (store) => async () => {
    const data = await fetch("https://musica-api.up.railway.app/new");
    const posts = await data.json();
    return {
      props: {
        posts,
      },
    };
  }
);

export default Home;