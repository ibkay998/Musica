import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import fetchMusicReducer from './fetchMusicSlice';

const makeStore = () => {
  let store = configureStore({
    reducer: fetchMusicReducer,
  });

  return store;
}

export const storeWrapper = createWrapper(makeStore);