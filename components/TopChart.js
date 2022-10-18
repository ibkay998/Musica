import LogoSearch from "./LogoSearch"
import Navbar from "./Navbar"
import frame from "../public/Frame.png"
import guy from "../public/guy.png"
import Image from "next/image"
import Wave from "./Wave"
import TopChartComponent from "./TopChartComponet"

export default function TopChart() {
    return (
    <div className='flex flex-col mt-5 w-full md:w-2/6  rounded-xl  relative md:justify-between'>
        
        <h1 className="text-2xl font-bold text-[24px] font-quicksand">Top Chart</h1>
        <div className="flex md:flex-col overflow-scroll ml-[-10px] mt-3 ">
            <TopChartComponent name="Golden age of 80s" subname="Sean swadder" time="2:34:45" image={guy}/>
            <TopChartComponent  name="Golden age of 80s" subname="Sean swadder" time="2:34:45" image={guy}/>
            <TopChartComponent  name="Golden age of 80s" subname="Sean swadder" time="2:34:45" image={guy}/>
        
        </div>
        
        
        
    </div>
)}