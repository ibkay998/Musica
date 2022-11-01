import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Image from 'next/image';

const MainCollection = ({cover ,title}) => {
  const lists = useSelector((state) => state.fetchMusic.collection);

  return (
    <div className='relative rounded-lg w-[359px] h-[234px] md:w-[213px] md:h-[234px] justify-center cursor-pointer overflow-hidden  mx-auto mb-[20px] '>
      <Image className='rounded-lg absolute mix-blend-normal hover:scale-125 ease-in-out duration-500' src={cover} alt=""  width={213} height={234}/>
    </div>
  )
}

export default MainCollection
