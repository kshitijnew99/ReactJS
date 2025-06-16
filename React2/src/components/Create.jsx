import {nanoid} from 'nanoid'
import './index.scss'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import  { useContext } from 'react'
import { todocontext } from './Wrapper'

const Create = () => {

    const [todo,settodo] = useContext(todocontext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = (data) =>{
        
        data.isCompleted = false;
        data.id = nanoid();      

        const copytodo = [...todo];
        copytodo.push(data)
        settodo(copytodo);
        reset()

        toast.success("Task Added.")        
        
    }

    return (
        <div className="create">
            <h1>Set <span className='remainder'><i>Remainder</i></span> for <br /> Task</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <input 
                {...register('title',{required : 'title can not be empty'})      }
                className='task-input'
                type="text" 
                placeholder='Enter your task' 
                />
                <br />
                <small className='errorvalidation'>{errors?.title?.message} </small> 
                
                <br />
                
                <button className='createButton'>Add Task</button>
            </form> 
        </div>
    )
}

export default Create