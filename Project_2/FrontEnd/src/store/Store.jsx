import { configureStore } from '@reduxjs/toolkit'
import userslice from './UserSlice';

export const store = configureStore({
  reducer: {
    user : userslice,
  },
})