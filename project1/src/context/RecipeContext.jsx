
import { createContext } from 'react'
import { useState } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {


    const [data,setdata] = useState([
        {
            "id": 1,
            "Name": "Classic Margherita Pizza",
            "ingredients": [
                "Pizza dough",
                "Tomato sauce",
                "Fresh mozzarella cheese",
                "Fresh basil leaves",
                "Olive oil",
                "Salt and pepper to taste"
            ],
            "instructions": [
                "Preheat the oven to 475°F (245°C).",
                "Roll out the pizza dough and spread tomato sauce evenly.",
                "Top with slices of fresh mozzarella and fresh basil leaves.",
                "Drizzle with olive oil and season with salt and pepper.",
                
            ],
            "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "description" : "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
            "category" : "Snacks"
            
        }
    ]) 
    console.log(data);
    

    return (
        <recipecontext.Provider value={{data,setdata}}>
            {props.children}
        </recipecontext.Provider>
    )
}

export default RecipeContext;