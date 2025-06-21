import  { useContext } from 'react'
import { recipecontext } from './../context/RecipeContext';
import { useParams } from 'react-router-dom';

const SingleRecipe = () => {

    const { data } = useContext(recipecontext);
    const param = useParams();
    console.log(data,param.id);
    var recipe = data.find((recipe) => param.id == recipe.id)
    console.log(recipe);
    
    
  return (
    <div className='singlerecipe'>
        <img  className='single-img' src={recipe.url} alt="" />
        <h1>{recipe.Name}</h1>
        <h3>{recipe.category}</h3>
        <h3>{recipe.description}</h3>
        <h5>{recipe.ingredients}</h5>
        <h5>{recipe.instruction}</h5>
    </div>
  )
}

export default SingleRecipe