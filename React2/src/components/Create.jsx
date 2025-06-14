import React, { useState } from 'react'
import {nanoid} from 'nanoid'

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

    const buttomcss = {
                        backgroundColor: "blue",
                        padding : "10px 20px", 
                        fontSize : "20px" , 
                        borderRadius : "20px" , 
    }

    return (
        <>
            <h1>Create Task</h1>
            <form onSubmit={submitHandler}>
                <input 
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text" 
                placeholder='Enter your task' 
                />
                <br />
                <br />
                
                <button style={buttomcss}>Add Task</button>
            </form>
        </>
    )
}

export default Create