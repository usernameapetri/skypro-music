import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const trackApi = createApi({
  reducerPath: 'trackApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://skypro-music-api.skyeng.tech',
    prepareHeaders: (headers, { getState }) => {
      const token = JSON.parse(localStorage.getItem('token')).access;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => ({
        url: '/catalog/track/all/',
      }),
    }),
    getAllFavorite: builder.query({
      query: () => ({
        url: '/catalog/track/favorite/all/',
        method: 'GET',
      }),
    }),
    removeFavorite: builder.mutation({
      query: (trackId) => ({
        url: `/catalog/track/${trackId}/favorite/`,
        method: 'DELETE',
      }),
    }),
    addToFavorites: builder.mutation({
      query: (trackId) => ({
        url: `/catalog/track/${trackId}/favorite/`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useAddToFavoritesMutation,
  useRemoveFavoriteMutation,
  useGetAllTracksQuery,
  useGetAllFavoriteQuery,
} = trackApi;
