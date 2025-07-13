import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data : [],// it's like useState in context , array of object
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        louduser : (state,action) => {
            state.data = action.payload;
            console.log(action);
            
        } // sync data
        
        
    } 
})
export const {louduser} = userSlice.actions
export default userSlice.reducer