import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts : [],// it's like useState in context , array of object
}

const cartsSlice = createSlice({
    name : "carts",
    initialState,
    reducers : {
        loudcarts : (state,action) => {
            state.data = action.payload;
            console.log(action);
            
        } // sync data
        
        
    } 
})
export const {loudcarts} = cartsSlice.actions
export default cartsSlice.reducer