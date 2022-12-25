import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unsplashAPI = createApi({
  reducerPath: "unsplashAPI-RP",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.unsplash.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", process.env.REACT_APP_API_KEY);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: ({ test1:term, page }) => `search/photos?page=${page}&query=${term}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetPhotosQuery, useLazyGetPhotosQuery } = unsplashAPI;
