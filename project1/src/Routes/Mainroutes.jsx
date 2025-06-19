import { Routes , Route } from "react-router-dom"
import Home from "./../pages/Home";
import About from './../pages/About';
import Recipes from './../pages/Recipes';
import Create from './../pages/Create';



const Mainroutes = () => {
  return (
    <div >
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipes" element={<Recipes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/create" element={<Create/>} />
      </Routes>
    </div>
  )
}

export default Mainroutes