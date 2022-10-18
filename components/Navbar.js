import Image from 'next/image';
import home from '../public/Home.png';
import radio from '../public/radio.png';
import profile from '../public/profile.png';
import playlist from '../public/playlist.png';
import videos from '../public/videos.png';
import logout from '../public/logout.png';

export default function Navbar() {
  return (
    <div className='hidden md:fixed md:flex w-[52px] md:flex-col text-white opacity-75 top-[78px]'>
      <div className='flex flex-col bg-[#1A1E1F] rounded-full p-4'>
        <div className='w-[22px] hover:text-yellow-500 cursor-pointer'>
            <Image src={home} alt="" />
        </div>
        <div className='pt-3 cursor-pointer'>
            <Image src={playlist} alt="" />
        </div>
        <div className='pt-3 cursor-pointer'>
            <Image src={radio} alt="" />
        </div>
        <div className='pt-3 cursor-pointer'>
            <Image src={videos} alt="" />
        </div>
      </div>

      <div className='flex flex-col  bg-[#1A1E1F] rounded-full p-4 mt-5'>
        <div className='cursor-pointer'>
            <Image src={profile} alt="" />
        </div>
        <div className='pt-3 cursor-pointer'>
            <Image src={logout} alt="" />
        </div>
      </div>
    </div>
  );
}
