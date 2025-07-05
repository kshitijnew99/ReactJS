import axios from './api/axios'; // custom axios instance
import { useEffect } from 'react';

const App = () => {
  const getproduct = async () => {
    try {
      const res = await axios.get('/products');
      // console.log(res); // logs the product list
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return <div>hello world</div>;
};

export default App;
