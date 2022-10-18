import MusicList from "./MusicList"

export default function PopularArea() {
    return (
    <div className='flex flex-col mt-5'>
        <h1 className="font-quicksand font-bold text-[24px] ml-5">Popular In Your Area</h1>
        <MusicList/>
    </div>
)}