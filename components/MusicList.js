import MusicCard from "./MusicCard"
import musicList from "../data/musicList"
import { useDispatch, useSelector, useStore } from "react-redux";
import album from "../public/AlbumCard.png"

export default function MusicList() {
    const data = useSelector(state=>state.fetchMusic.allTrackState)
    console.log(data)
    return (
    <div className='flex overflow-x-scroll overflow-hidden scroll-smooth'>
        {data?.map((item,index)=>(
            <MusicCard key ={index} title={item.title} cover={item.cover}/>
        ))}
    </div>
)}