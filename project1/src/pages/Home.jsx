
import axios from '../utils/axios';

const Home = () => {

  const getproduct = async () => {
          try {
            const response = await axios.get("/products ")
            console.log(response.data);
            
          } catch (error) {
              // console.log(error);
              
          }
  }
  return (
    <div className='home'>
      <h1>Home</h1>
      <button onClick={getproduct} >Get Product</button>

    </div>
  )
}

export default Home