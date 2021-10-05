import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { getRecipe } from "../../api/recipe-api";

const RecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState({
		title: "Test",
		media: {
			video: "",
			imageUrls: [],
			preparatimeTime: "",
			cookTime: "",
			totalServings: "",
			ingredients: [],
			directions: [],
			additionalTips: "",
		},
		description: "",
	});

	useEffect(() => {
		getRecipe(recipeId).then((recipe) => {
			setRecipe(recipe);
		});
	}, [recipeId, recipe]);

	return (
		<Container>
			{
				// Add a {recipe.title}
				//  Recipe Header Container
				// Add media container
				// if video display video as main image else display first image {recipe.media.video}
				// render a carousel of images {recipe.media.images}
				// Quick Details Container
				// recipe.preparationTime
				// recipe.cookTime
				// recipe.totalTime = recipe.preparationTime + recipe.cookTime
				// recipe.totalServings
				// Add ingredients container
				// Add Directions container
				// Additional Tips & Advice Container
				// Reviews container
			}
		</Container>
	);
};

export default RecipePage;
