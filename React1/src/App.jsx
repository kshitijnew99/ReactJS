import React from 'react'

import { useState } from "react";

import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {

  const [users,setusers] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
  ]);


  return (
    <div>
        <Create users={users}  setusers={setusers}/>
        <Read users={users}  setusers={setusers}/>
    </div>
  )
}

export default App