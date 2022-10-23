import LogoSearch from "./LogoSearch"
import Navbar from "./Navbar"
import frame from "../public/Frame.png"
import guy from "../public/guy.png"
import Image from "next/image"
import Wave from "./Wave"


export default function Header() {
    
    return (
    <div className='flex h-[350px] md:h-[373px] w-full md:w-3/5 md:mt-7 md:ml-3 overflow-clip bg-[#609EAF] rounded-3xl justify-between font-quicksand relative'>
        <div className="flex flex-col m-6 justify-between">
            <p className="text-sm">Curated Playlist</p>
            <h1 className="text-[35px] font-bold">R & B Hits</h1>
            <div className="flex text-[14px] flex-col font-normal">
                <span>All mine, Lie again, Petty call me</span>
                <span>everyday, Out of time, No love, Bad</span>
                <span>habit, and so much more</span>    
            </div>   
            <div className="">
                <Image src={frame} alt=""/>
            </div>
        </div>
        <div className="absolute top-[-139px] right-0 rotate-[79deg] md:rotate-0 md:left-[23px] md:top-0 ">
            <Wave/>
        </div>
        <div className="hidden md:flex relative top-[30px] animate-imageMove">
            <div className="abosolute left-8">
                <Image  src={guy} alt="" />
            </div>
        </div>
        
    </div>
)
      
      
  }