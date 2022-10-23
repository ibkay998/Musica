import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import music from '../pages/api/getMusicApi';
import musicList from '../data/musicList';
import Image from 'next/image';
import Controls from './Controls';
import MusicSlider from './MusicSlider';
import { storeWrapper } from '../store/index';
import { countNumber } from '../store/testingSlice'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';

function MusicPlay({posts,datas,res}) {
  const [playing, setPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [audioValue, setAudioValue] = useState(30);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const toggle = () => setPlaying(!playing);
  const [data, setData] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const audio = useRef(null);
  const news = useSelector(state => state.musicList)
  const fors = useSelector(state => state.count)

  console.log(news,"this is it",fors)

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > data.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = data.length - 1;
        }

        return temp;
      });
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
    if (isPlaying) {

      audio.current.play();
      audio.current.onended = SkipSong;
    } else {
      audio.current.pause();
    }
  });

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://musica-api.up.railway.app/new',
      params: {},
    })
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className='flex bottom-0 h-[125px] border-t-2 border-gray-200 bg-[#1E1E1E] opacity-95 md:fixed justify-between w-full items-center'>
      <audio
        src={data[currentSongIndex]?.audio}
        ref={audio}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        onTimeUpdate={getCurrDuration}
    
    
      ></audio>
      <div>Testing 1</div>
      <div className='flex flex-col w-9/12 items-center'>
        <Controls
          SkipSong={SkipSong}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
        <MusicSlider setSliderValue={setSliderValue} onChange={onChange} sliderValue={sliderValue}/>
      </div>

      <div className='flex w-2/12'>
        <Slider aria-label='slider-ex-1' defaultValue={30} onChange={onChangeVolume} audioValue={audioValue}>
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

