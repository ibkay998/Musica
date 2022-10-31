import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import TomorrowsHeader from '../components/TomorrowsHeader';
import TopChart from '../components/TopChart';
import NewRelease from '../components/NewRelease';
import PopularArea from '../components/PopularArea';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { storeWrapper } from '../store/index';
import { fetchMusic } from '../store/fetchMusicSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import React from 'react';
import Lead from '../public/Lead2.png';
import convertToObject from '../utils/convertMusicListToState';
import TomorrowsComponent from '../components/TomorrowsComponent';
import { changePlaying, changeCurrentTrack } from '../store/fetchMusicSlice';
import { motion } from 'framer-motion';

const TommorowTunes = () => {
  const lists = useSelector((state) => state.fetchMusic.globalMusicState);
  const dispatch = useDispatch();

  const playMusicListById = (index) => {
    dispatch(changePlaying(['general', index]));
  };
  return (
    <motion.div
      className='flex flex-col w-full overflow-y-auto hide-scrollbar md:pl-20 mt-8 pr-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className='w-full relative'>
        <div className='w-full h-full fixed opacity-10 '>
          <Image className='object-cover' src={Lead} alt='' layout='fill' />
        </div>

        <main className='flex m-5 flex-col text-white w-full'>
          <div className='flex flex-col md:flex-row w-full justify-between'>
            <TomorrowsHeader />
          </div>
          <div className='mr-10'>
            {lists.map((list, index) => (
              <TomorrowsComponent
                key={index}
                id={index}
                name={list.title}
                duration={list.duration}
                image={list.cover}
                type='testing it out'
                playMusicListById={playMusicListById}
              />
            ))}
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default TommorowTunes;
