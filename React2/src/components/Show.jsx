import React from 'react'

const Show = (props) => {

    const todo = props.todo;
    const settodo = props.settodo;

    const render = todo.map(function(elem,idx){
        return  <li key={idx}>
                    <p>Task : {elem.title}</p>
                    <p>IsCompleted : {elem.isCompleted}</p>
                </li>
    })

    return (
        <>
            <h1>User Data</h1>
            <h2>
                <ul>
                {render}
                </ul>
            </h2>
        </>
    )
}

export default Show