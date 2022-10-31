import musicList from "../data/musicList"
import Image from "next/image"
import play from "../public/play.png"

export default function MusicCard({id,titles,cover,playMusicListById}) {
    return (
    
    <div className='group flex flex-col m-4 relative'>
        <div className="w-[153px] h-[153px]">
            <Image className = "rounded-xl" src={cover} alt="" width={153} height={153}/>
        </div>
        <div className="invisible group-hover:visible absolute bottom-0 right-0">
            <button onClick={()=>playMusicListById(id)}><Image src={play} alt=""/></button>
        </div>
        <span>{titles}</span>
    </div>
)}