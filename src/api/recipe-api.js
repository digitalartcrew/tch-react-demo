export const getRecipes = () => {
	return fetch("/data/recipes.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	});
};

export const getRecipe = (recipeId) => {
	return fetch("/data/recipes.json", {
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
	})
		.then((res) => res.json())
		.then((recipes) => {
			return recipes.find((recipe) => recipe.id === parseInt(recipeId));
		});
};
