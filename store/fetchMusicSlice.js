import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from "next-redux-wrapper";
import shuffleList from "../utils/shuffleList"

const initialState = {
  globalMusicState: [],
  Track:null,
  currentTrack:[],
  topTrackState:[],
  allTrackState:[],
  onRepeat:false,
  shuffled:false,
  isPlaying: false,
  indexPlaying: 0,
  collection:[],
  liked:[],
};


const fetchMusicSlice = createSlice({
  name: "fetched",
  initialState,
  reducers: {
    fetchMusic(state, action) {
      state.globalMusicState = [...action.payload]
      state.topTrackState =state.globalMusicState.slice(0,3)
      state.allTrackState=[...state.globalMusicState]
      state.Track = "general"
      state.currentTrack = [...state.allTrackState]
    },
    changeIsPlaying(state,action){
      state.isPlaying = action.payload
    },
    changePlaying(state,action) {
      if(action.payload){
        if(action.payload[0]==="topTrack"){
          if(state.Track==="general"){
            state.Track = "topTrack"
          }
          state.currentTrack = [...state.topTrackState]
          state.indexPlaying = action.payload[1]
          state.isPlaying = true
        }else{
          if(state.Track==="topTrack"){
            state.Track = "general"
          }
          
          state.currentTrack = [...state.allTrackState]
          state.indexPlaying = action.payload[1]
          state.isPlaying=true
        }
      }
      
    },
    shuffleState(state){
      if (!shuffled){
      state.allTrackState = shuffleList(state.allTrackState)
      state.shuffled = true
      }
      else{
        state.allTrackState = [...state.globalMusicState]
        state.shuffled = false
      }
    },
    changeRepeat(state,action){
      state.onRepeat = action.payload
    },
    playMusic(state,action="general"){
      if (action.payload==="topTrack"){
        state.Track="topTrack"
      }else{
        state.Track="general"
      }
    },
    changeCurrentTrack(state,action){
      if(action.payload === "general"){
        state.Track="general"
        state.currentTrack = [...state.allTrackState]
      }
      else{
        state.Track="topTrack"
        state.currentTrack = [...state.topTrackState]
      }
    },
    addToLiked(state,action){
      state.liked.push(action.payload)
    },
    removeFromLiked(state,action){
      const index = state.liked.indexOf(action.payload);
      if (index > -1) { 
        state.liked.splice(index, 1); // 2nd parameter means remove one item only
      }
    },
    addToCollections(state,action){
      state.collection=[...action.payload]
    },
    removeFromCollections(state,action){
      const index = state.collection.indexOf(action.payload);
      if (index > -1) { // only splice array when item is found
        state.collection.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return (state = {
        ...state,
        ...action.payload.category,
      });
    },
  },
});

export const { fetchMusic,shuffleState,changeRepeat,playMusic,changeCurrentTrack,changeIsPlaying,changePlaying,addToCollections,addToLiked,removeFromCollections,removeFromLiked } = fetchMusicSlice.actions;
export default fetchMusicSlice.reducer;