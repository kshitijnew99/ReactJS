import React from 'react'




function Create() {

    const [fullname,setFullname] = useState("")
    const [age,setage] = useState()
    
    const submitHandler = (e) => {
        e.preventDefault();
        const newusers = {fullname,age}
        console.log(newusers)
    }  



  return (
    <div>
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
    </div>
  )
}

export default Create