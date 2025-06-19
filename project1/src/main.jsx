import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import RecipeContext from './context/RecipeContext.jsx';

createRoot(document.getElementById('root')).render(

  <RecipeContext>
    <BrowserRouter>
      <App />
    </BrowserRouter> 
  </RecipeContext>
)

