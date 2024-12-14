import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authSlice";
import { apiSlice } from "../features/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
