import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unsplashAPI = createApi({
  reducerPath: "unsplashAPI-RP",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", process.env.REACT_APP_API_KEY)
      return headers;
    },
  }),
  
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: (term) => `search/photos?page=1&query=${term}`
    })
  }),
});

export const { useGetPhotosQuery, useLazyGetPhotosQuery } = unsplashAPI;
