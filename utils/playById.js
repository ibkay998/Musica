export default function playMusicListById(dispatch,index){
    dispatch(changePlaying(["general",index]))
}