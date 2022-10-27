export default function convertToObject(musicList){
    const length = musicList.length
    const newState = {}
    for(let i=0; (i < length);i++){
        newState[i] = musicList[i]
    }
    return newState
}