import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { setRequestMeta } from 'next/dist/server/request-meta';


const initialState = {
    isPlaying: false,
    currentPlaying:false,
    ref: null,
    indexPlaying: 0,
}

const playingSlice = createSlice({
    name: 'playing',
    initialState,
    reducers: {
        changePlaying(state,action) {
            state.isPlaying = action.payload
        },
        playByPayload(state,action){
            state.currentPlaying = action.payload
        },
        setRef(state,action){
            state.ref = action.payload
        },
        setIndex(state,action){
            state.indexPlaying = action.payload
        }

        
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

export const { changePlaying,playByPayload,setRef,setIndex} = playingSlice.actions;
export default playingSlice.reducer;