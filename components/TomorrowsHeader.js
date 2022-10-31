import LogoSearch from "./LogoSearch"
import Navbar from "./Navbar"
import frame from "../public/Frame.png"
import Lead from "../public/Lead-image.png"
import play from "../public/play.png"
import musicsquare from "../public/musicsquare.png"
import heart from "../public/Heart.png"
import Image from "next/image"
import Wave from "./Wave"


export default function TomorrowsHeader() {
    return (
    <div className='flex flex-col md:flex-row z-[10]'>
        <div className="">
            <Image className="rounded-xl" src={Lead} alt="" width={284} height={289}/>
        </div>
        <div className="ml-8 flex flex-col justify-center">
            <h1 className="text-[#A4C7C6] text-[55px] font-quicksand font-bold  ">Tomorrows Tune</h1>
            <span className="text-[20px] font-quicksand font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</span>
            <div className="flex ">
                <button className="flex rounded-xl items-center justify-center">
                    <div>
                        <Image src={play} alt="" width={60} height={64}/>
                    </div>
                    <span className="font-normal font-quicksand">Play All</span>
                </button>
                <button className="flex  backdrop-blur-sm rounded-xl ml-3 items-center justify-center">
                    <div className="flex">
                        <Image src={play} alt="" width={60} height={64}/>
                    </div>
                    <span>Add to Collection</span>
                </button>
                <button className="flex  p-5 ml-3 ">
                    <div className="flex">
                        <Image src={play} alt="" width={60} height={64}/>
                    </div>
                </button>
            </div>
        </div>
    </div>
)    
}