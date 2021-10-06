import Container from "react-bootstrap/Container";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { getRecipe } from "../../api/recipe-api";
import { Image } from "react-bootstrap";
import FiveStarRating from "../five-star-rating";

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
			<h1>{recipe.title}</h1>
			<FiveStarRating rating={recipe.rating} />
			{/* <p>{recipe.author}</p>
			<Container className="recipe-header">
				<Container className="media-container">
					{recipe.media?.video ? (
						<VideoPlayer />
					) : (
						<Image src={recipe.imageUrls[0]} />
					)}
					<FoodImageCarousel images={recipe.imageUrls} />
				</Container>
				<Container className="recipe-details-container">
					<ul>
						<li> Preparation Time: {recipe.preparationTime}</li>
						<li> Cook Time: {recipe.cookTime}</li>
						<li> Total Time: {recipe.preparationTime + recipe.cookTime}</li>
						<li> Total Serving: {recipe.totalServings}</li>
					</ul>
				</Container>
			</Container>
			<Container className="ingredients-container"></Container>
			<Container className="additional-container"></Container>
			<Container className="review-container"></Container> */}
		</Container>
	);
};

export default RecipePage;
