import MusicList from "./MusicList"

export default function NewRelease() {
    return (
    <div className='flex flex-col mt-11'>
        <h1 className="font-quicksand font-bold text-[24px] ml-5">New Release</h1>
        <MusicList/>
    </div>
)}