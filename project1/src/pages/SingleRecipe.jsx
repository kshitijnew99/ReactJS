import { useContext, useEffect, useState } from 'react';
import { recipecontext } from './../context/RecipeContext';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [favroites, setfavroites] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const recipe = data.find((r) => r.id === id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      Name: '',
      description: '',
      ingredients: '',
      instruction: '',
      category: '',
      url: '',
    },
  });

  useEffect(() => {
    if (recipe) {
      reset({
        Name: recipe.Name || '',
        description: recipe.description || '',
        ingredients: recipe.ingredients || '',
        instruction: recipe.instruction || '',
        category: recipe.category || '',
        url: recipe.url || '',
      });
    }
  }, [recipe, reset]);

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id === id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    localStorage.setItem('recipes', JSON.stringify(copydata));
    toast.success('Recipe Updated 😋');
  };

  const DeleteHandler = () => {
    const filteredData = data.filter((r) => r.id !== id);
    setdata(filteredData);
    localStorage.setItem('recipes', JSON.stringify(filteredData));
    toast.success('Recipe Removed.');
    navigate('/recipes');
  };

  const favHandler = () => {
    let copyfav = [...favroites];
    copyfav.push(recipe);
    setfavroites(copyfav);
    localStorage.setItem('fav', JSON.stringify(copyfav));
  };

  const UnfavHandler = () => {
    const favfilter = favroites.filter((f) => f.id !== recipe.id);
    setfavroites(favfilter);
    localStorage.setItem('fav', JSON.stringify(favfilter));
  };

  // ✅ Safe conditional check after all hooks
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="singlerecipe">
      <div className="single-recipe-data">
        {favroites.find((r) => r.id === recipe.id) ? (
          <i
            onClick={UnfavHandler}
            className="hearts ri-poker-hearts-fill"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="hearts ri-poker-hearts-line"
          ></i>
        )}

        <h1>{recipe.Name}</h1>
        <img className="single-img" src={recipe.url} alt={recipe.Name} />
      </div>

      <div className="modify-form">
        <form className="form" onSubmit={handleSubmit(UpdateHandler)}>
          <input
            className="url"
            {...register('url')}
            type="url"
            placeholder="Enter Image URL"
          />
          <hr />
          <small className="error">This is how error is shown</small>
          <br />

          <input
            className="recipe-title"
            {...register('Name')}
            type="text"
            placeholder="Recipe Title"
          />
          <hr />
          <br />

          <textarea
            className="description"
            {...register('description')}
            placeholder="// Add the description"
          ></textarea>
          <hr />
          <br />

          <textarea
            className="ingredients"
            {...register('ingredients')}
            placeholder="// Write ingredients"
          ></textarea>
          <hr />
          <br />

          <textarea
            className="instruction"
            {...register('instruction')}
            placeholder="// Give instructions"
          ></textarea>
          <hr />
          <br />

          <select {...register('category')} className="category">
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="snacks">Snacks</option>
            <option value="dinner">Dinner</option>
          </select>
          <br />

          <button className="update-recipe">Update Recipe</button>
          <button
            type="button"
            onClick={DeleteHandler}
            className="delete-recipe"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
