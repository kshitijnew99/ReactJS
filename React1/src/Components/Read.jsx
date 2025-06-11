import React from 'react'

const Read = (props) => {


    const users = props.users
    const setusers = props.setusers


    const render = users.map(function(elem,idx){
      return  <li key={idx}>
                <h2>Name : {elem.name} </h2>
              </li>
    })

  return (
    <div>
        <h1>User data</h1>
        <ul>{render}</ul>
    </div>
  )
}

export default Read


// import React from 'react'

// function Read(props) {

//     // console.log(props);

//     const users = props.users
    // const setusers = props.setusers
    
//     const render = users.map(function(elem,inx){

//         return <li key={inx} >Name : {elem.name}</li>
//     })

//     return (
//         <div>
//             <h1>UserName</h1>
//             <h2>{render}</h2>
//         </div>
//     )
// }

// export default Read