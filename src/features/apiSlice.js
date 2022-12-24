import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const testApi = createApi({
  reducerPath: "testApi-RP",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", process.env.REACT_APP_API_KEY)
      return headers;
    },
  }),
  
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
    }),
    getUser: builder.query({
      query: (id) => `https://api.unsplash.com/search/photos?page=1&query=${id}`
    })
  }),
});

export const { useGetUsersQuery, useGetUserQuery } = testApi;
