import TopChartComponent from "./TopChartComponet"
import { useSelector,useDispatch } from "react-redux"
import {changePlaying,changeCurrentTrack } from '../store/fetchMusicSlice'
import Image from "next/image"
import playMusicListById from "../utils/playById"
import play from "../public/play.png"

export default function SearchSongCard({song, id,cover,title}) {
    const dispatch = useDispatch()

    return (
        <div className='group flex flex-col m-4 relative'>
        <div className="w-[153px] h-[153px]">
            <Image className = "rounded-xl" src={cover} alt="" width={153} height={153}/>
        </div>
        <div className="invisible group-hover:visible absolute bottom-0 right-0">
            <button onClick={()=>playMusicListById(dispatch,id)}><Image src={play} alt=""/></button>
        </div>
        <span>{title}</span>
    </div>
)}