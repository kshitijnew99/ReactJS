import { useForm } from "react-hook-form";
import {nanoid} from 'nanoid'
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const navigate = useNavigate();

    const  {data,setdata} = useContext(recipecontext)

    const { register, handleSubmit , reset } = useForm();

    const SubmitHandler =  (recipe) =>{
        recipe.id = nanoid();
        const copydata = [...data]
        copydata.push(recipe)
        setdata(copydata)
        localStorage.setItem('Recipes', JSON.stringify(copydata))
        toast.success("New Recipe Added🥘")
        navigate('/recipes');
        reset();
        
    }

  return (
    <div className='create'>
        <form className="form" onSubmit={handleSubmit(SubmitHandler)} >
            <input 
            className="url"
            {...register("url")}
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
            placeholder="// Add the description"  ></textarea>
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
            {...register("category")}
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


/*
0
: 
{id: 1, Name: 'Classic Margherita Pizza', category: 'Snacks', ingredients: Array(6), instruction: 'Preheat the oven to 475°F (245°C).', …}
1
: 
{Name: 'Samosa', category: 'Snacks', ingredients: 'wheat floor , patota', description: '1 Plate of somasa is the of around 500 calories.', id: 'WDjwoG4yhnbqLYsv8YhQD', …}
2
: 
{Name: 'Chicken Biryani', category: 'Dinner', description: 'Chicken biryani is a royal served to the mugal kings', id: 'WDjwoG4yhnbqLYsv8YhQD', ingredients: 'Biryani Rice, Chicken, Onion, Tomato', …}
3
: 
{url: 'https://cdn.uengage.io/uploads/28289/image-14DG1B-1723180624.jpg', Name: 'Chole Bhature', description: 'Chole N=Bhature is the common snack in the street of the india.', ingredients: 'whaet floor , chick pees, cooking oil.', instruction: '1) firstly neat the floor.\n2) make the bhature.\n3)make the chick pee curry.', …}
length
: 
4
*/