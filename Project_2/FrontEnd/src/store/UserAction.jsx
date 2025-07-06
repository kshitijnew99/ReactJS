import axios from '../api/axios'; 
import { louduser } from '../store/UserSlice';


export const asyncgetusers = () => async (dispatch,getState) =>{ 
    /*
    waha par asyncgetusers = "() => async (dispatch,getState) =>{}" ye kyu kiya ,
    jb dispatch(asyncgetuser()) chala toh waha asyncgetuser() ko bhi toh ek action chahiye hota ,
    that why function ke ander ek function aur bna diya , jaha inner function is acts as the action for ayncgetusers 
    */ 

    try {
            console.log("Current State : ",getState()); 
            
            const res = await axios.get('/users')
            
            dispatch(louduser(res.data)) // louduser is a action not a function in redux-toolkit and actions are always dispetch
            
    } catch (error) {
            console.log(error);
            
    }
    }