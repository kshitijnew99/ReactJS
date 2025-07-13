import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register , reset , handleSubmit } = useForm();
    return (
        <div className='register'>
            <form  className='registerform'>
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
                    type="password" 
                    placeholder='********' />
                <button className='submit'>Register</button>
                <p>Already have an account <Link className='login-redirect' to="/login">LogIn</Link> </p> 
            </form>
        </div>
    )
}

export default Register