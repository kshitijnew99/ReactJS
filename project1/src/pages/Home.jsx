
import axios from '../utils/axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
 import { useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);

  

  const getproduct = async () => {
          try {
            var {data} = await axios.get("search.php?s=");
            setProducts(data.meals)

          } catch (error) {
              // console.log(error);
          }
  }


  
  useEffect(() => {
    
      getproduct();

    return () => {
        
              
    }
  }, [])
  
  return (
    <div className='home'>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img className='pro-img ' src={product.strMealThumb} alt={product.name} />
          <h3 className='pro-name' >{product.strMeal}</h3>
          {/* <p className='pro-price'>₹{product.price}</p> */}
          <h4 className='pro-cat'>{product.strCategory}</h4>
          <h4 className='pro-desc'>{product.strInstructions}</h4>
          
        </div>
      ))}

    </div>
  )
}

export default Home

// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95
// rating
// : 
// {rate: 3.9, count: 120}
// title
// : 
// "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"