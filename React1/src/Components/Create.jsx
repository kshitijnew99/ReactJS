import React from 'react'

import { useState } from 'react'

const Create = (props) => {

    const users = props.users
    const setusers = props.setusers

    const [fullname,setfullname] = useState("")
    const [age,setage] = useState(0)



    const changeHandler = (e) => {
        e.preventDefault()
        const newusers = {name: fullname,age:age}
        console.log(newusers);
        


    }


  return (
    <div>
        <form onSubmit={changeHandler}>
            <h1>Registration</h1>
            <input 
            onChange={(e) => setfullname(e.target.value)}
            value={fullname}
            type="text"  
            placeholder='Enter your name : '/>
            <input 
            onChange={(e) => setage(e.target.value)}
            value={age}
            type="number" 
            placeholder='Enter your age : ' />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Create



// import React from 'react'
// import { useState } from "react"




// function Create(props) {

//     // console.log(props);
//     const users = props.users
//     const setusers = props.setusers
    

//     const [fullname,setFullname] = useState("")
//     const [age,setage] = useState()

//     const submitHandler = (e) => {
//         e.preventDefault();
//         const newusers = {fullname,age}
//         // console.log(newusers)
//         // setting user into this
//     }  



//   return (
//     <div>
//         <form onSubmit={submitHandler}>
//               <h1>Registration</h1>
//               <input
//               onChange={(e) => setFullname(e.target.value)}
//               value={fullname}
//               type="text" placeholder="Enter your name" />

//               <input 
//               onChange={(e) => setage(e.target.value)}
//               value={age}
//               type="number" placeholder="Enter your age" />
//               <button>submit</button>
//         </form>
//     </div>
//   )
// }

// export default Create


