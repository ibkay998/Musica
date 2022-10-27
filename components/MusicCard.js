import musicList from "../data/musicList"
import Image from "next/image"

export default function MusicCard({title,cover}) {
    return (
    
    <div className='flex flex-col m-4'>
        <div className="w-[153px] h-[153px]">
            <Image className = "rounded-xl" src={cover} alt="" width={153} height={153}/>
        </div>
        <span>{title}</span> 
    </div>
)}