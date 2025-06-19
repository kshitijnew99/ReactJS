import { NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <div className='nav'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/recipes">Recipes</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink className='create-recipes' to="/create">Create Recipes</NavLink>
    </div>
  )
}

export default Nav