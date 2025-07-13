
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register , reset , handleSubmit } = useForm();
  return (
    <div className='login'>
      <form  className='loginform'>
        
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