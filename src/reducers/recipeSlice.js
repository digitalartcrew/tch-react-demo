import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
	name: "recipe",
	initialState: {
		recipes: [],
	},
	reducers: {
		setRecipes: (state, action) => {
			state.recipes = [...action.payload];
		},
		createRecipe: (state, action) => {
			state.recipes = [...state.recipes, action.payload];
		},
		updateRecipe: (state, action) => {
			state.recipes = [...state.recipes, ...action.payload];
		},
		removeRecipe: (state, action) => {
			state.recipes = [
				...state.recipes.filter((recipe) => recipe.id !== action.payload.id),
			];
		},
	},
});

export const { setRecipes, createRecipe, updateRecipe, removeRecipe } =
	recipeSlice.actions;

export default recipeSlice.reducer;
