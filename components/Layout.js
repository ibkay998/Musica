import LogoSearch from "./LogoSearch"
import Navbar from "./Navbar"
import MusicPlay from "./MusicPlay"

export default function Layout({children}) {
    return (
    <div className='flex flex-col w-full'>
        <LogoSearch/>
        <div className="flex md:mx-6 w-full">
            <Navbar/>
            <div className="m-12 flex w-full">{children}</div>
        </div>
        <div className="flex w-full">
            <MusicPlay/>
        </div>
        
        
    </div>
)
      
      
  }