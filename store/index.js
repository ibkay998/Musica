import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import fetchMusicReducer from './fetchMusicSlice';
import {api} from './newFetch';
import playingSliceReducer from './testingSlice';

const makeStore = () => {
  let store = configureStore({
    reducer:{
      fetchMusic: fetchMusicReducer,
      playing: playingSliceReducer,
      [api.reducerPath]:api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
  });

  return store;
}

export const storeWrapper = createWrapper(makeStore);