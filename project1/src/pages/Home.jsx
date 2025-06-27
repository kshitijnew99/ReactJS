
import axios from '../utils/axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
 

const Home = () => {
  

  const getproduct = async () => {
          try {
            var {data} = await axios.get("/products ");
          

          } catch (error) {
              // console.log(error);
          }
  }


  
  useEffect(() => {
    
      getproduct();

    return () => {
        // console.log("Home page Un-Mounted");
              
    }
  }, [])
  
  return (
    <div className='home'>
      {/* <h1>Home</h1> */}
      {/* <button onClick={getproduct} >Get Product</button> */}
      {getproduct}

    </div>
  )
}

export default Home