import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import fetchMusicReducer from './fetchMusicSlice';
import playingSliceReducer from './testingSlice';

const makeStore = () => {
  let store = configureStore({
    reducer:{
      fetchMusic: fetchMusicReducer,
      playing: playingSliceReducer,
    }
  });

  return store;
}

export const storeWrapper = createWrapper(makeStore);