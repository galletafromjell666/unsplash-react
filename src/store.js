import { configureStore } from "@reduxjs/toolkit";
// import { productsApi } from "./features/apiSlice";
import {unsplashAPI} from './features/apiSlice'
export const store = configureStore({
  reducer: {
    [unsplashAPI.reducerPath]: unsplashAPI.reducer,
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unsplashAPI.middleware),
});