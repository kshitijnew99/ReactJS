import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Service from '../components/Service';
import Product from '../components/Product';
import ProductDetail from '../components/ProductDetail';
import ServiceDetail from '../components/ServiceDetail';
import ServiceUpdate from '../components/ServiceUpdate';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product' element={<Product />} />
      <Route path='/product/detail/:name' element={<ProductDetail />} />


      <Route path='/service' element={<Service />} >
        <Route path='/service/detail' element={<ServiceDetail />} />
        <Route path='/service/update' element={<ServiceUpdate />} />
      </Route>
      
      <Route path='/about' element={<About />} />
    </Routes>
  );
};

export default Mainroutes;
