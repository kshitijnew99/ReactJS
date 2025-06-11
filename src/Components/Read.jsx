import React from 'react'

function Read() {
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