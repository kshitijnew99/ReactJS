
import { createContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const recipecontext = createContext(null)

const RecipeContext = (props) => {


    const [data,setdata] = useState([
        
    ]) 
    
    useEffect(() => {
      setdata(JSON.parse(localStorage.getItem('Recipes')) || []);
    
    }, [])
    
    

    return (
        <recipecontext.Provider value={{data,setdata}}>
            {props.children}
        </recipecontext.Provider>
    )
}

export default RecipeContext;

/*
{
            "id": "1",
            "Name": "Classic Margherita Pizza",
            "category" : "Snacks",
            "ingredients": [
                "Pizza dough,
                ",Tomato sauce",
                ",Fresh mozzarella cheese",
                ",Fresh basil leaves",
                ",Olive oil",
                ",Salt and pepper to taste"
            ],
            "instruction": "Preheat the oven to 475°F (245°C)."
                ,
            "url": "https://cdn.dummyjson.com/recipe-images/1.webp",
            "description" : "Bake in the preheated oven for 12-15 minutes ."
            
        },
        {
            "Name": "Samosa",
            "category" : "Snacks",
            "ingredients": "wheat floor , patota",
            "description" : "1 Plate of somasa is the of around 500 calories.",
            "id" : "WDjwoG4yhnbqLYsv8YhQD",
            'instruction' : "Deep fried them",
            "url": "https://static.toiimg.com/photo/61050397.cms"
        },
        {
            "Name": "Chicken Biryani",
            "category" : "dinner",
            "description" : "Chicken biryani is a royal served to the mugal kings",
            "id" : "WDjwoG4yhnbqNYsv8YhQD",
            "ingredients": "Biryani Rice, Chicken, Onion, Tomato",
            'instruction' : "1) Boil the rice.2) Cook the chicken separately. 3) Mix the rice and chicken and ook them together for 15 minutes..",
            "url": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"
        }


*/