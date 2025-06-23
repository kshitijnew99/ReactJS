
import axios from '../utils/axios';
import { useEffect } from 'react';
 

const Home = () => {

  const getproduct = async () => {
          try {
            const {data} = await axios.get("/products ")
            console.log(data); 
          } catch (error) {
              console.log(error);
          }
  }

  useEffect(() => {
    
      console.log("Home page Mounted");
      getproduct();
      

    return () => {
        console.log("Home page Un-Mounted");
              
    }
  }, [])
  
  return (
    <div className='home'>
      <h1>Home</h1>
      <button onClick={getproduct} >Get Product</button>

    </div>
  )
}

export default Home