import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/recipeSlice";

export default configureStore({
	recipes: recipeReducer,
});
