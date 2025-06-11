import { useState } from "react"
import Create from "./Components/Create";
import Read from "./Components/Read";

const App = () => {


  const [users,setusers] = useState([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
]);

  

  

  // const Changevalue = (e) => setFullname(e.target.value);
  
  

  return (<>
            <Create />
            <hr />
            <Read />
            
         </>)
} 
export default App
