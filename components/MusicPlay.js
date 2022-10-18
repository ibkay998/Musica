import musicList from "../data/musicList"
import Image from "next/image"
import Controls from "./Controls"
import MusicSlider from "./MusicSlider"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

export default function MusicPlay() {
    return (
    <div className='flex bottom-0 h-[125px] border-t-2 border-gray-200 bg-[#1E1E1E] opacity-95 md:fixed justify-between w-full items-center'>
        <div>Testing 1</div>
        <div className="flex flex-col w-9/12 items-center">
            <Controls/>
            <MusicSlider/>
        </div>
        
        <div className="flex w-2/12">
            <Slider aria-label='slider-ex-1' defaultValue={30}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </div>

    </div>
)}