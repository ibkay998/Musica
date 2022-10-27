import LogoSearch from "./LogoSearch"
import Navbar from "./Navbar"
import frame from "../public/Frame.png"
import guy from "../public/guy.png"
import topchartimage from "../public/topchartimg.png"
import Image from "next/image"
import Wave from "./Wave"
import heart from "../public/Heart.png"
import play from "../public/play.png"
import { useDispatch, useSelector } from "react-redux"
import {changePlaying,changeCurrentTrack } from '../store/fetchMusicSlice';

export default function TopChartComponent({image, name, subname,time,id,handleTopChartFunction}) {
    
    const track = useSelector(state => state.fetchMusic.Track )
    const isPlaying = useSelector(state=>state.fetchMusic.isPlaying)
    
    
    return (
    <div className='group flex h-[233px] min-w-[250px] md:mt-3 md:min-w-max md:h-[96px] font-normal font-quicksand bg-[#1A1E1F] rounded-xl justify-between relative cursor-pointer'>
        <div className="flex flex-col md:flex-row p-3">
            <div className="flex mt-3 w-[63px] h-[63px]">
                <Image src={image} alt="" width={63} height={63}/>
            </div>
            <div className="flex flex-col p-2">
                <span className="text-[17px]">{name}</span>
                <span className="mt-2  text-[12px]">{subname}</span>
                <span className="mt-2 text-[12px]">{time}</span>
            </div>
        </div>
        <div className="flex flex-grow-0 m-[15px]">
            <div className="p-2">
                <Image  src={heart} alt=""/>
            </div>
        </div>
        <div className="invisible group-hover:visible absolute bottom-[-20px] right-0">
            <button onClick={()=>handleTopChartFunction(id)}><Image src={play} alt=""/></button>
        </div>
    </div>
)}