import React from 'react'
import RecipeCard from '../components/RecipeCard';

const Fav = () => {
 const favroites = JSON.parse(localStorage.getItem("fav")) || [];

  const renderrecipe = favroites.map((recipe) => ( 
    
     <RecipeCard key={recipe.id} recipe={recipe} />  
      
  ));

  

  return (
    <div className='recipes'>
      {favroites.length > 0 ?  renderrecipe : "No Favroites Yet...." }
    </div>
  )
}

export default Fav