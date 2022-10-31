import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector, useStore } from "react-redux";
import music from '../pages/api/getMusicApi';
import musicList from '../data/musicList';
import Image from 'next/image';
import Controls from './Controls';
import MusicSlider from './MusicSlider';
import { storeWrapper } from '../store/index';
import { countNumber } from '../store/testingSlice'
import { changeCurrentTrack,changeIsPlaying,playMusic,changePlaying } from '../store/fetchMusicSlice';

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';

function MusicPlay() {
  const [sliderValue, setSliderValue] = useState(0);
  const [audioValue, setAudioValue] = useState(30);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const data = useSelector(state => state.fetchMusic.currentTrack)
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useDispatch()
  const audio = useRef(null);
  let isPlayingFromStore = useSelector(state => state.fetchMusic.isPlaying)
  let trackState = useSelector(state => state.fetchMusic.Track)
  let current = useSelector(state => state.playing.currentPlaying)
  let currentIndex = useSelector(state => state.fetchMusic.indexPlaying)
  
  const SkipSong = (forwards = true) => {
    let temp = currentIndex;
    if (forwards) {
        temp++;
        if (temp > data.length - 1) {
          temp = 0;
        }
    
    dispatch(changePlaying(["general",temp]))

    } else {
      temp--
      if (temp < 0) {
        temp = data.length - 1;
      }
      dispatch(changePlaying(["general",temp]))
        
      
    }
  };

  const onChange=(e)=>{
    audio.current.currentTime = (audio.current.duration / 100) * e
    setSliderValue(e)
  }

  const onChangeVolume=(e)=>{
    audio.current.volume = (e/100)
    setAudioValue((e/100).toFixed(1))
  }

  const getCurrDuration = (e)=>{
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration)* 100).toFixed(2)
    const time = e.currentTarget.currentTime
    setSliderValue(+percent)
    setCurrentTime(time.toFixed(2))
  }

  useEffect(() => {
    if (isPlayingFromStore) {
      audio.current.play();
      audio.current.onended = SkipSong;
    } else {
      audio.current.pause();
    }
  });


  return (
    <div className='flex bottom-0 h-[125px] border-t-2 border-gray-200 bg-[#1E1E1E] opacity-95 md:fixed justify-between w-full items-center'>
      <audio
        src={data[currentIndex]?.audio}
        ref={audio}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        onTimeUpdate={getCurrDuration}
    
    
      ></audio>
      <div className='flex ml-4'>
        <Image className='rounded-lg' src={data[currentIndex]?.cover} alt="testing" width={49} height={49}/>
        <div className='flex flex-col ml-2'>
          <h1 className='font-quicksand font-bold text-[14px]'>{data[currentIndex]?.title}</h1>
          <h2 className='font-quicksand font-bold text-[10px]'>{data[currentIndex]?.artist}</h2>
        </div>
      </div>
      <div className='flex flex-col w-9/12 items-center'>
        <Controls
          SkipSong={SkipSong}
        />
        <MusicSlider setSliderValue={setSliderValue} onChange={onChange} sliderValue={sliderValue}/>
      </div>

      <div className='flex w-2/12'>
        <Slider aria-label='slider-ex-1' defaultValue={30} onChange={onChangeVolume} audiovalue={audioValue}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
    </div>
  );
}


export default MusicPlay

