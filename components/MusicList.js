import MusicCard from "./MusicCard"
import musicList from "../data/musicList"
import { useDispatch, useSelector, useStore } from "react-redux";
import album from "../public/AlbumCard.png"
import { changeCurrentTrack,changeIsPlaying,playMusic,changePlaying } from '../store/fetchMusicSlice';

export default function MusicList() {
    const data = useSelector(state=>state.fetchMusic.allTrackState)
    const dispatch = useDispatch()
    const playMusicListById = (index)=>{
        dispatch(changePlaying(["general",index]))
    }
    return (
    <div className='flex overflow-x-scroll overflow-hidden scroll-smooth'>
        {data?.map((item,index)=>(
            <MusicCard key ={index} titles={item.title} cover={item.cover} id={index} playMusicListById={playMusicListById}/>
        ))}
    </div>
)}