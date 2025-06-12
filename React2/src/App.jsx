import React, { useState } from 'react'
import {nanoid} from 'nanoid'

const App = () => {

  const [todo,settodo] = useState([
    // {id: 1 , title:'kaam kar bhai', isCompleted : false}
  ])

  const [title,settitle] = useState("")
  


  const submitHandler = (e) =>{
    e.preventDefault();    
    const newtask = {
      id : nanoid(),
      title : title,
      isCompleted : "false"
    }

    // let copytodo = [...todo];
    // copytodo.push(newtask);
    // settodo(copytodo);

    settodo([...todo,newtask]) // both this line and the above 3 line are doing same work

    settitle("") 
  }

  const render = todo.map(function(elem,idx){
      return  <li>
                {/* <p>Id : {elem.id}</p> */}
                {/* <br /> */}
                <p>Task : {elem.title}</p>
                {/* <br /> */}
                <p>IsCompleted : {elem.isCompleted}</p>
              </li>
  })

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={submitHandler}>
        <input 
          onChange={(e) => settitle(e.target.value)}
          value={title}
          type="text" 
          placeholder='Enter your task' 
        />
        <br />
        <br />
        
        <button>Add Task</button>
      </form>
      <hr />
      <br />
      <h1>User Data</h1>
      <h2>
        <ul>
          {render}
        </ul>
      </h2>
    </div>
  )
}

export default App