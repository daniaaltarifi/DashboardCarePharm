import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './Slices/ApiSlice.js';
import authReducer from './Slices/authSlice.js'; // add this line

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer, // add this line
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
