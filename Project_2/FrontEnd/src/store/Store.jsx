// Store is just a group of data

import { configureStore } from '@reduxjs/toolkit'
import Userslice from './reducers/UserSlice'
import Productslice from './reducers/ProductSlice'
import Cartslice from './reducers/CartSlice'
// import { useReducer } from 'react'




export const store = configureStore({
  reducer: { // in our store we have the userslice, and same we can have productslice and cartslice
    useReducer : Userslice,
    cartReducer : Cartslice,
    productReducer : Productslice
  },
})