import musicList from "../data/musicList"
import Image from "next/image"

export default function MusicCard({name,image}) {
    return (
    
    <div className='flex flex-col m-4 '>
        <div className="w-[153px]">
            <Image src={image} alt=""/>
        </div>
        <span>{name}</span> 
    </div>
)}