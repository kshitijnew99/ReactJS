
import axios from './../../node_modules/axios/lib/axios';

const Home = () => {

  const getproduct = async () => {
          try {
            const {data} = await axios.get("https://fakestoreapi.com/products ")
            console.log({data});
            
          } catch (error) {
              console.log(error);
              
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