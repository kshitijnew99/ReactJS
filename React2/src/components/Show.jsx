import React from 'react'
import './index.scss'

const Show = (props) => {

    const todo = props.todo;
    const settodo = props.settodo;

    const DeleteHandler = (id) => {
        const filtertodo = todo.filter((todo) => todo.id != id)
        settodo(filtertodo);  
    }

    const render = todo.map((todo) => {
        return  <li key={todo.id} className='renderlist'>
                    Task : {todo.title} 
                    <span  className='delete' onClick={() => DeleteHandler(todo.id)}>Delete</span>
                </li>
    })

    return (
        <div className='show'>
            <h1><i>Pending <span className='task'>Task</span></i></h1>
            <h2>
                <ol >
                    {render}
                </ol>
            </h2>   
            
        </div>
    )
}

export default Show