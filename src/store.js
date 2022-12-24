import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { productsApi } from "./features/apiSlice";
import {testApi} from './features/apiSlice'
export const store = configureStore({
  reducer: {
    [testApi.reducerPath]: testApi.reducer,
  },
 middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(testApi.middleware),
});