import Image from 'next/image'
import React from 'react'
import heart from "../public/Heart.png"
import icon from "../public/icon4.png"
import play from "../public/play.png"


const TomorrowsComponent = ({id,image,name,type,duration,playMusicListById}) => {
  return (
    <div className='group h-[63px] w-full mx-2 bg-[#33373B5E] flex mb-4 z-[10] items-center rounded-lg relative'>
        <div className='flex absolute left-2 items-center'>
            <div>
                <Image className='rounded-md' src={image} alt="img" width={39} height={39}/>
            </div>
            <div className='ml-3 hidden md:flex'>
                <Image src={heart} alt="img" width={20} height={15}/>
            </div>
        </div>
        <div className="invisible group-hover:visible absolute right-[20px] md:left-[75px] ">
            <button onClick={()=>playMusicListById(id)}><Image src={play} alt=""/></button>
        </div>
        <div className='flex flex-col md:flex-row ml-[50px] '>
            <div className='flex absolute top-3  md:left-[200px] md:top-5 xl:left-[400px]'>{name}</div>
            <div className='flex absolute bottom-3  md:right-[250px] md:top-5 xl:left-[700px]'>{type}</div>
        </div>
        
        <div className='flex flex-col md:flex-row'>
            <div className='flex absolute bottom-0  right-2 md:bottom-4  md:right-[50px] xl:left-[1050px]'>{duration}</div>
            <div className='flex absolute right-2 top-0'>
                <Image src={icon} alt="" width={10} height={15} />
            </div>
        </div>
        
    </div>
  )
}

export default TomorrowsComponent
