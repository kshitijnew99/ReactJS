import { Link } from 'react-router-dom';

const RecipeCard = (props) => {

    const {id,Name,category,url,instruction,ingredients,description} = props.recipe;
  return (
    <Link className='card' >
        
            <div className="showcard">
                <img className='image' src={url} alt="" />
                <h1>{Name}</h1>
                <h3>{category}</h3>
                <h3>{ingredients}</h3>
                <h4>{description}</h4>
                <h4>{instruction}</h4>
                
                <br />
                <hr />
            </div>
        
    </Link>
  )
}

export default RecipeCard