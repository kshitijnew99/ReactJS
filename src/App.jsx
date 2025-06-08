import { useState } from "react"

const App = () => {


  const [Username,setname] = useState("kshitij");


  const changeName = () => {
    setname("piyush");
  }
  console.log(Username);
  
  
  return (<>
            <h1>UserName</h1>
            <h3>{Username}</h3>
            
            

            <button onClick={changeName}>Change</button>
         </>)
} 
export default App
