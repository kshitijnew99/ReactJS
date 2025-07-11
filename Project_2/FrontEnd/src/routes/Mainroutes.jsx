import { Routes , Route } from "react-router-dom"
import Home from "../pages/Home"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes