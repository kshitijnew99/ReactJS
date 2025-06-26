import  { useContext } from 'react'
import { recipecontext } from './../context/RecipeContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const SingleRecipe = () => {
    const  {data,setdata} = useContext(recipecontext)
    const param = useParams();
    var recipe = data.find((recipe) => param.id == recipe.id)
    const navigate = useNavigate();
    
    const { register, handleSubmit , reset } = useForm({
        defaultValues : {
        
            Name : recipe.Name,
            description : recipe.description,
            ingredients : recipe.ingredients,
            instruction : recipe.instruction,
            category : recipe.category,
            url : recipe.url
        

    }});

    const UpdateHandler =  (recipe) =>{ 
        var index = data.findIndex((recipe) => param.id == recipe.id)
        const copydata = [...data];
        copydata[index] = {...copydata[index], ...recipe };
        console.log(copydata[index]);
        setdata(copydata);
        toast.success("Recipe Updated😋")
    }

    // const { data } = useContext(recipecontext);
    
    const DeleteHandler = () => {
        var filterdata = data.filter((recipe) => recipe.id !== param.id);
        setdata(filterdata);
        toast.success("Recipe Removed.")
        navigate("/recipes");
    }
    
    useEffect(() => {
      
        console.log("Single page Mounted");
        // getproduct();
        
  
      return () => {
          console.log("Single page Un-Mounted");
                
      }
    }, [])
    return (
        <div className='singlerecipe'>
            <div className="single-recipe-data">
                <h1>{recipe.Name}</h1>
                <img  className='single-img' src={recipe.url} alt="" />
            </div>

            <div className="modify-form">
                <form className="form" onSubmit={handleSubmit(UpdateHandler)} >
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
                    {...register("categort")}
                    
                    className="category">
                        <option value="breakfast">BreakFast</option>
                        <option value="lunch">Lunch</option>
                        <option value="snacks">Snacks</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    <br />
                    <button className="update-recipe" >Update Recipe</button>
                    <button type="button" onClick={DeleteHandler} className="delete-recipe" >Delete Recipe</button>


                </form>
            </div>
            
            
        </div>
    )
}

export default SingleRecipe