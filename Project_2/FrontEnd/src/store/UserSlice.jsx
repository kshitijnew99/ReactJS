import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],// it's like useState in context , array of object
}

const userslice = createSlice({
    name : "user",
    initialState,
    reducers : {},
})

export default userslice.reducer