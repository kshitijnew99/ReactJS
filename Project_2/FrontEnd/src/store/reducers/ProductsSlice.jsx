import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : [],// it's like useState in context , array of object
}

const productsSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        loudproducts : (state,action) => {
            state.data = action.payload;
            console.log(action);
            
        } // sync data
        
        
    } 
})
export const {loudproducts} = productsSlice.actions
export default productsSlice.reducer