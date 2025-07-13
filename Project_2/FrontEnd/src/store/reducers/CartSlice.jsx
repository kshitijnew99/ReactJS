import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts : [],// it's like useState in context , array of object
}

const cartSlice = createSlice({
    name : "carts",
    initialState,
    reducers : {
        loudcart : (state,action) => {
            state.data = action.payload;
            console.log(action);
            
        } // sync data
        
        
    } 
})
export const {loudcart} = cartSlice.actions
export default cartSlice.reducer