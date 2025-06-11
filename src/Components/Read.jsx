import React from 'react'

function Read(props) {

    // console.log(props);

    const users = props.users
    const setusers = props.setusers
    
    const render = users.map(function(elem,inx){

        return <li key={inx} >Name : {elem.name}</li>
    })

    return (
        <div>
            <h1>UserName</h1>
            <h2>{render}</h2>
        </div>
    )
}

export default Read