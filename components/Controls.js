import musicList from "../data/musicList"
import Image from "next/image"
import play from "../public/play.png"
import shuffle from "../public/shuffle.png"
import previous from "../public/previous.png"
import { shuffleState,changeIsPlaying } from "../store/fetchMusicSlice"
import { useDispatch,useSelector } from "react-redux"

import next from "../public/next.png"


export default function Controls({SkipSong}) {
    const dispatch = useDispatch()
    const isPlaying = useSelector(state => state.fetchMusic.isPlaying)

    const handlePlayAndPause=()=>{
        if (isPlaying=== false){
            dispatch(changeIsPlaying(true))
        }
        else{
            dispatch(changeIsPlaying(false))
        }
    }
    return (
    
        <div className='flex'>
            <div className="mt-5 mr-3">
                <button onClick={()=>dispatch(shuffleState())} >
                    <Image src={shuffle} alt=""/>
                </button>
            </div>
            <div className="mt-5">
                <button onClick={()=>SkipSong(false)} >
                    <Image src={previous} alt=""/>
                </button>
            </div>
            <div>
                <button onClick={handlePlayAndPause}>
                    <Image src={play} alt=""/>
                </button> 
            </div>
            <div className="mt-5">
                <button onClick={()=>SkipSong()} >
                    <Image src={next} alt=""/>
                </button>
            </div>
            
            
        </div>
)}