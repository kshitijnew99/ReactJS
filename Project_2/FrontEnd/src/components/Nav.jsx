
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/login'>Login</NavLink>

    </div>
  )
}

export default Nav