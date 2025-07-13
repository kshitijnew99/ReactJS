// Store is just a group of data

import { configureStore } from '@reduxjs/toolkit'
import userslice from './reducers/UserSlice';

export const store = configureStore({
  reducer: {
    user : userslice,// in our store we have the userslice, and same we can have productslice and cartslice
  },
})