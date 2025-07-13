import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products : [],// it's like useState in context , array of object
}

const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {
        loudproduct : (state,action) => {
            state.data = action.payload;
            console.log(action);
            
        } // sync data
        
        
    } 
})
export const {loudproduct} = productSlice.actions
export default productSlice.reducer