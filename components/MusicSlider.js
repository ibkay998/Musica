import musicList from "../data/musicList"
import Image from "next/image"
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'

export default function MusicSlider() {
    return (
        <div className="flex items-center w-9/12">
            <Slider aria-label='slider-ex-1' defaultValue={30}>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
            </Slider>
        </div>
)}