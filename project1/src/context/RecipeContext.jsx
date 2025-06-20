
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
                ",Tomato sauce",
                ",Fresh mozzarella cheese",
                ",Fresh basil leaves",
                ",Olive oil",
                ",Salt and pepper to taste"
            ],
            "instruction": "Preheat the oven to 475°F (245°C)."
                ,
            "url": "https://cdn.dummyjson.com/recipe-images/1.webp",
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