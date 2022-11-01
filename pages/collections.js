import { useDispatch, useSelector, useStore } from 'react-redux';
import React from 'react';
import { useState } from 'react';
import {
  removeFromCollections,
  removeFromLiked,
} from '../store/fetchMusicSlice';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import MainCollection from '../components/MainCollection';


const Collections = () => {
    const [current,setCurrent] = useState("collections")
  const lists = useSelector((state) => state.fetchMusic.collection);
  return (
    <motion.div
      className='flex flex-col  w-full overflow-y-auto hide-scrollbar md:pl-20 mt-[60px] md:mt-[50px] '
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className='w-full flex-col relative mt-7'>
        <div className='flex mb-7'>
          <Button name='Collections' />
          <Button  name='Like' />
        </div>
        <div className='grid gap-x-[24px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {lists.map((item, index) => (
            <MainCollection
              key={index}
              cover={item.cover}
              title={item.title}
              delete={removeFromCollections}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Collections;
