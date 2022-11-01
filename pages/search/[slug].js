import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
// import { useParams } from "react-router-dom";
import Error from "../../components/Errors";
import Loader from "../../components/Loader";
import SearchSongCard from "../../components/SearchSongCard";
import getSearchList from "../../utils/getSearchList";
// import { useGetSongsBySearchQuery } from "../redux/services/Api";

export default function Search() {
  const router = useRouter()
  const songs = useSelector(state=>state.fetchMusic.globalMusicState)
  console.log(songs.length)
  const { slug } = router.query
  const ans = getSearchList(songs,slug)
  


//   const { data, isFetching, error } = useGetSongsBySearchQuery(search);
//   console.log(data);
//   const songs = data?.tracks.hits.map((item) => item.track);
//   console.log(songs);

//   if (isFetching) return <Loader title="Searching Our Library" />;
//   if (error) return <Error />;
  return (
    <div className="flex flex-col  md:pl-20 mt-20 px-4 overflow-y-auto">
      <h1 className="font-bold text3-xl text-white text-left mt-4 mb-10">
        Results for :{" "}
        <span className="font-black text-green-600 text-xl">{slug}</span>
      </h1>
      <div className="flex flex-wrap sm:justify-start justify-center gap-x-8 gap-y-20">
        {ans?.map((song, index) => {
          return (
            <SearchSongCard
              key={song.id}
              song={song}
              titles={song.title}
              cover={song.cover}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
}