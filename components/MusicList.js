import MusicCard from "./MusicCard"
import musicList from "../data/musicList"
import album from "../public/AlbumCard.png"

export default function MusicList() {
    return (
    <div className='flex overflow-x-scroll overflow-hidden  scroll-smooth'>
        {musicList.map((item)=>(
            <MusicCard key ={item} name={item.name} image={album}/>
        ))}
    </div>
)}