
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';

const Login = () => {
  const { register , reset , handleSubmit } = useForm();

  const loginhandler = (data) =>{
    data.id = nanoid()
    console.log(data);
    
  }
  return (
    <div className='login'>
      <form  className='loginform' onSubmit={handleSubmit(loginhandler)}>
        
        <input 
        {...register("email")}
        type="email" 
        placeholder='Email' />
        <input 
        {...register("password")}
        type="password" 
        placeholder='********' />
        <button className='submit'>Login In</button>
        <p>Create a new account <Link className='register-redirect' to="/register">Register</Link></p> 
      </form>
    </div>
  )
}

export default Login