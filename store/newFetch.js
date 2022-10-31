import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://musica-api.up.railway.app/new",
  }),
  endpoints: (builder) => ({
    getWorldChart: builder.query({
      query: () => `/`,
    }),
    // getSongDetails: builder.query({
    //   query: (songid) => `/tracks/details?track_id=${songid}`,
    // }),
    // getRelatedSongs: builder.query({
    //   query: (songid) => `/tracks/related?track_id=${songid}`,
    // }),
    // getSongsByCountry: builder.query({
    //   query: (country) => `/charts/country?country_code=${country}`,
    // }),
    // getSongsBySearch: builder.query({
    //   query: (search) =>
    //     `/search/multi?query=${search}&search_type=SONGS_ARTISTS`,
    // }),
  }),
});

export const {
  useGetWorldChartQuery,
//   useGetSongDetailsQuery,
//   useGetRelatedSongsQuery,
//   useGetSongsByCountryQuery,
//   useGetSongsBySearchQuery,
} = api;