import React, { useState } from 'react'

const App = () => {

  const [todo,settodo] = useState([
    {id: 1 , title:'kaam kar bhai', isCompleted : false}
  ])

  const [title,settitle] = useState("")
  const [ischecked,setIsChecked] = useState(false)
  const [gender,setgender] = useState("Female") 
  const [city, setcity] = useState("lucknow")


  const submitHandler = (e) =>{
    e.preventDefault();
  }

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
        <input
        onChange={(e) => setIsChecked(e.target.checked)} 
        checked={ischecked}
        value={ischecked}
        type="checkbox" /> Completed
        <br />
        <br />
        <input
        value = 'Male' // you can ses that male is selected this is 2 way binding 
        onChange={(e) => setgender(e.target.value)}
        checked = {gender == 'Male' && true}
        type="radio" /> Male


        <input
        value = 'Female'
        onChange={(e) => setgender(e.target.value)}
        checked = {gender == 'Female' && true}
        type="radio" /> Female 
        <br /><br />
        <select  value={city} onChange={(e) => setcity(e.target.value)} >
          <option value="Delhi">Delhi</option>
          <option value="lucknow">Lucknow</option>
          <option value="mumbai">Mumbai</option>
        </select>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default App