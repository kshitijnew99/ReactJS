import React from 'react'

const Show = (props) => {

    const todo = props.todo;
    const settodo = props.settodo;

    const DeleteHandler = (id) => {
        const filtertodo = todo.filter((todo) => todo.id != id)
        settodo(filtertodo);
        
    }

    const render = todo.map((todo) => {
        return  <li key={todo.id}>
                    Task : {todo.title} | <span onClick={() => DeleteHandler(todo.id)}>Delete</span>


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