import musicList from "../data/musicList"
import Image from "next/image"
import play from "../public/play.png"
import shuffle from "../public/shuffle.png"
import previous from "../public/previous.png"

import next from "../public/next.png"


export default function Controls({setIsPlaying,isPlaying,SkipSong}) {
    return (
    
        <div className='flex'>
            <div className="mt-5 mr-3">
                <Image src={shuffle} alt=""/>
            </div>
            <div className="mt-5">
                <button onClick={()=>SkipSong(false)} >
                    <Image src={previous} alt=""/>
                </button>
            </div>
            <div>
                <button onClick={() => setIsPlaying(!isPlaying)}>
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