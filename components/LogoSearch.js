import Logo from "./Logo"
import { useEffect, useState, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useRouter } from 'next/router'

export default function LogoSearch() {
    const [search,setSearch] = useState("")
    const router = useRouter()

    function handleChange(e){
        const data = e.target.value
        setSearch(data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
      };
    return (
    <div className='flex justify-between md:justify-start ml-8 pt-8 md:pt-8 md:fixed z-10 bg-[#1E1E1E] w-full'>
        <div className="flex">
            <GiHamburgerMenu className="flex md:hidden w-10 h-10 text-white mr-5"/>
            <Logo className=""/>
        </div>
        
        <div className="ml-16 flex items-center text-white opacity-25">
            <BsSearch className="w-10 h-10 md:w-6 md:h-6"/>
            <form onSubmit={handleSubmit}>
                <input className="hidden md:ml-3 md:bg-transparent md:border-none md:outline-none md:flex" value={search} onChange={handleChange} type="text" placeholder="Search Artists"/>
            </form>
            
        </div>
    </div>
)
      
      
  }