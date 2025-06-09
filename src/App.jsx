import { useState } from "react"


const App = () => {


  const [users,setusers] = useState([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 }
]);

  const render = users.map(function(elem,inx){
      return <li key={inx} >Name : {elem.name}</li>
  })

  const Changevalue = (e) => {
    console.log(e.target.value);
    
  } 
  

  return (<>
            <form action="">

              <h1>Registration</h1>
              <input
              onChange={Changevalue}
              type="text" placeholder="Enter your name" />
              <input type="text" placeholder="Enter your age" />
              <button>submit</button>
            </form>
            <hr />
            <h1>UserName</h1>
            <h2>{render}</h2>
            <hr />
         </>)
} 
export default App
