import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { asyncgetusers } from '../store/actions/UserAction';
import { useDispatch } from 'react-redux';

const Register = () => {
    const { register , reset , handleSubmit } = useForm();
    const dispatch = useDispatch();

    const registerhandler = (user) =>{
        user.id = nanoid()
        console.log(user);
        dispatch(asyncgetusers(user));
        
    }





    return (
        <div className='register'>
            <form  className='registerform' onSubmit={handleSubmit(registerhandler)}>
                <input 
                    {...register("Username")}
                    type="text" 
                    placeholder='Username' />
                <input 
                    {...register("email")}
                    type="email" 
                    placeholder='Email' />
                <input 
                    {...register("password")}
                    type="password." 
                    placeholder='********' />


                <button className='submit'>Register</button>


                <p>Already have an account <Link className='login-redirect' to="/login">LogIn</Link> </p> 
            </form>
        </div>
    )
}

export default Register