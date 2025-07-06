    import axios from '../api/axios'; 


    export const asyncgetusers = async () =>{
        try {
            const res = await axios.get('/users')
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }