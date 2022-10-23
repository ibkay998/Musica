import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
    musicList: []
}

const fetchMusicSlice = createSlice({
    name: 'fetched',
    initialState,
    reducers: {
        fetchMusic(state, action) {
            state.musicList = [...state.musicList, ...action.payload];
        },
        
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return state = {
                ...state,
                ...action.payload.category
            };
        },
    },
});

export const { fetchMusic} = fetchMusicSlice.actions;
export default fetchMusicSlice.reducer;