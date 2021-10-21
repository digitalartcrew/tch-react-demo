import { createSlice } from "@reduxjs/toolkit";

const recipeSlice = createSlice({
	name: "recipe",
	initialState: {
		value: [],
	},
	reducers: {
		createRecipe: (state, action) => {
			state.value = [...state.value, ...action.payload];
		},
		updateRecipe: (state, action) => {
			state.value = [...state.value, ...action.payload];
		},
		removeRecipe: (state, action) => {
			state.value = [
				...state.value.filter((recipe) => recipe.id !== action.payload.id),
			];
		},
	},
});

export const { createRecipe, updateRecipe, removeRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
