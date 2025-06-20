import { useForm } from "react-hook-form";
import {nanoid} from 'nanoid'
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";


const Create = () => {

    const  {data,setdata} = useContext(recipecontext)

    const { register, handleSubmit , reset } = useForm();

    const SubmitHandler =  (recipe) =>{
        recipe.id = nanoid();
        

        setdata([...data,recipe]);
        reset();
        
    }

  return (
    <div className='create'>
        <form className="form" onSubmit={handleSubmit(SubmitHandler)} >
            <input 
            className="url"
            {...register("image-url")}
            type="url" 
            placeholder='Enter Image URL' /> <br /> <  hr />
            <small className="error" >This is how error is shown</small> <br />

            <input 
            className="recipe-title"
            {...register("Name")}
            type="text" 
            placeholder='Recipe Title' /> <br /> <  hr /> <br />

            <textarea 
            className="description"
            {...register("description")}
            placeholder="// Start form here"  ></textarea>
            <hr /><br />

            <textarea 
            className="ingredients"
            {...register("ingredients")}
            placeholder="// Write ingredients"  ></textarea>
            <hr /><br />

            <textarea 
            className="instruction"
            {...register("instruction")}
            placeholder="// Give instructions"  ></textarea>
            <hr /><br />

            <select 
            {...register("categort")}
            className="category">
                <option value="breakfast">BreakFast</option>
                <option value="lunch">Lunch</option>
                <option value="snacks">Snacks</option>
                <option value="dinner">Dinner</option>
            </select>
            {/* <br /> */}
            <button className="save-recipe" >Save Recipe</button>


        </form>
    </div>
  )
}

export default Create