import musicList from "../data/musicList"
import Image from "next/image"
import play from "../public/play.png"
import shuffle from "../public/shuffle.png"
import previous from "../public/previous.png"

import next from "../public/next.png"


export default function Controls() {
    return (
    
        <div className='flex'>
            <div className="mt-5 mr-3">
                <Image src={shuffle} alt=""/>
            </div>
            <div className="mt-5">
                <Image src={previous} alt=""/>
            </div>
            <div>
                <Image src={play} alt=""/>
            </div>
            <div className="mt-5">
                <Image src={next} alt=""/>
            </div>
            
            
        </div>
)}