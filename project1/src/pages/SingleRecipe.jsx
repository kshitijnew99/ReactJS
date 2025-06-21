import  { useContext } from 'react'
import { recipecontext } from './../context/RecipeContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const SingleRecipe = () => {
    const navigate = useNavigate();
    const  {data,setdata} = useContext(recipecontext)
    const { register, handleSubmit , reset } = useForm();

    const SubmitHandler =  (recipe) =>{ 
        var index = data.findIndex((recipe) => param.id == recipe.id)
        console.log(index);
        

    }

    // const { data } = useContext(recipecontext);
    const param = useParams();
    var recipe = data.find((recipe) => param.id == recipe.id)

    
    
  return (
    <div className='singlerecipe'>
        <div className="single-recipe-data">
            <h1>{recipe.Name}</h1>
            <img  className='single-img' src={recipe.url} alt="" />
        </div>

        <div className="modify-form">
            <form className="form" onSubmit={handleSubmit(SubmitHandler)} >
                <input 
                className="url"
                value={recipe.url}
                {...register("url")}
                type="url" 
                placeholder='Enter Image URL' /> <br /> <  hr />
                <small className="error" >This is how error is shown</small> <br />

                <input 
                className="recipe-title"
                {...register("Name")}
                value={recipe.Name}
                type="text" 
                placeholder='Recipe Title' /> <br /> <  hr /> <br />

                <textarea 
                className="description"
                value={recipe.description}
                {...register("description")}
                placeholder="// Add the description"  ></textarea>
                <hr /><br />

                <textarea 
                className="ingredients"
                {...register("ingredients")}
                value={recipe.ingredients}
                placeholder="// Write ingredients"  ></textarea>
                <hr /><br />

                <textarea 
                className="instruction"
                {...register("instruction")}
                value={recipe.instruction}
                placeholder="// Give instructions"  ></textarea>
                <hr /><br />

                <select 
                {...register("categort")}
                
                className="category">
                    value={recipe.category}
                    <option value="breakfast">BreakFast</option>
                    <option value="lunch">Lunch</option>
                    <option value="snacks">Snacks</option>
                    <option value="dinner">Dinner</option>
                </select>
                <br />
                <button className="update-recipe" >Update Recipe</button>
                <button className="delete-recipe" >Delete Recipe</button>


            </form>
        </div>
        
        
    </div>
  )
}

export default SingleRecipe