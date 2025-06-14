import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import './index.scss'

const Create = (props) => {


    const todo = props.todo;
    const settodo = props.settodo;

    const [title,settitle] = useState("")

    const submitHandler = (e) =>{
        e.preventDefault();    
        const newtask = {
        id : nanoid(),
        title : title,
        isCompleted : "false"
        }

        // let copytodo = [...todo];
        // copytodo.push(newtask);
        // settodo(copytodo);

        settodo([...todo,newtask]) // both this line and the above 3 line are doing same work
        
        settitle("")    
    }

    

    return (
        <div className="create">
            <h1>Set <span className='remainder'>Remainder</span> for <br /> Task</h1>
            <form onSubmit={submitHandler}>
                <input 
                className='task-input'
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text" 
                placeholder='Enter your task' 
                />
                <br />
                
                <button className='createButton'>Add Task</button>
            </form>
        </div>
    )
}

export default Create