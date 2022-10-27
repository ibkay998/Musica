import LogoSearch from "./LogoSearch"
import Navbar from "./Navbar"
import frame from "../public/Frame.png"
import guy from "../public/guy.png"
import Image from "next/image"
import Wave from "./Wave"
import TopChartComponent from "./TopChartComponet"
import { useSelector,useDispatch } from "react-redux"
import {changePlaying,changeCurrentTrack } from '../store/fetchMusicSlice'

export default function TopChart() {
    const data = useSelector(state=>state.fetchMusic.topTrackState)
    const dispatch = useDispatch()
    const handleTopChartFunction = (index)=>{
        console.log(index)
        dispatch(changeCurrentTrack("topTrack"))
        dispatch(changePlaying(["topTrack",index]))
    };

    return (
    <div className='flex flex-col mt-5 w-full md:w-2/6  rounded-xl  relative md:justify-between'>
        
        <h1 className="text-2xl font-bold text-[24px] font-quicksand">Top Chart</h1>
        <div className="flex md:flex-col overflow-scroll ml-[-10px] mt-3 ">

            {data.map((item,index)=>(
                <TopChartComponent key={index} handleTopChartFunction={handleTopChartFunction} id ={index} name={item?.title} subname="Sean swadder" time="2:34:45" image={item?.cover}/>
            ))}
            
        
        </div>
        
        
        
    </div>
)}