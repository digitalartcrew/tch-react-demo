import { combineReducers } from 'redux'
import recipesReducer from './components/forms/slices/recipes/recipesSlice'


const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    recipes: recipesReducer,
  });
  

  export default rootReducer;
