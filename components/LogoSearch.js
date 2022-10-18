import Logo from "./Logo"
import { BsSearch } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'

export default function LogoSearch() {
    return (
    <div className='flex justify-between md:justify-start ml-8 pt-8 md:pt-8 md:fixed z-10 bg-[#1E1E1E] w-full'>
        <div className="flex">
            <GiHamburgerMenu className="flex md:hidden w-10 h-10 text-white mr-5"/>
            <Logo className=""/>
        </div>
        
        <div className="ml-16 flex items-center text-white opacity-25">
            <BsSearch className="w-10 h-10 md:w-6 md:h-6"/>
            <input className="hidden md:ml-3 md:bg-transparent md:border-none md:outline-none md:flex" type="text" placeholder="Search Artists"/>
        </div>
    </div>
)
      
      
  }