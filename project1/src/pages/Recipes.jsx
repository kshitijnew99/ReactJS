import  { useContext } from 'react'
import { recipecontext } from '../context/RecipeContext'

const Recipes = () => {

  const {data} = useContext(recipecontext)

  const renderrecipe = data.map((recipe) => {
    return <div className='renderrecipe' key={recipe.id}>
      <h1>{recipe.Name}</h1>
      <h3>{recipe.ingredients}</h3>
      <h3>{recipe.category}</h3>
      <h3>{recipe.description}</h3>
      <h3>{recipe.instruction}</h3>
      
      
      <br />
    </div>
  });

  return (
    <div className='recipes'>
      {renderrecipe }
        
    </div>
  )
}

export default Recipes


