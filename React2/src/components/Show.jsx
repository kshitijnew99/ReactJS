import React, { useContext } from 'react'
import './index.scss'
import { toast} from 'react-toastify'

import { todocontext } from './Wrapper'
const Show = () => {

    const [todo,settodo] = useContext(todocontext)
    
    const DeleteHandler = (id) => {
        const filtertodo = todo.filter((todo) => todo.id != id) 
        settodo(filtertodo);  

        toast.error("task deleted");
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