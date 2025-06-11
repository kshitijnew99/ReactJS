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

  const [fullname,setFullname] = useState("")
  const [age,setage] = useState()


  // const Changevalue = (e) => setFullname(e.target.value);
    
  
  
  const submitHandler = (e) => {
    e.preventDefault();

    const newusers = {fullname,age}
    console.log(newusers)
  }
  

  return (<>
            <form onSubmit={submitHandler}>

              <h1>Registration</h1>
              <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text" placeholder="Enter your name" />

              <input 
              onChange={(e) => setage(e.target.value)}
              value={age}
              type="number" placeholder="Enter your age" />
              <button>submit</button>
            </form>
            <hr />
            <h1>UserName</h1>
            <h2>{render}</h2>
            <hr />
         </>)
} 
export default App
