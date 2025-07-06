import axios from '../api/axios'; 
import { louduser } from '../store/UserSlice';

export const asyncgetusers = async () =>{
    try {
            const res = await axios.get('/users')
            // console.log(res.data);
            louduser(res.data)
            
    } catch (error) {
            console.log(error);
            
    }
    }