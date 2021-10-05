import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { getRecipe } from "../../api/recipe-api";

const RecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState({
		title: "Test",
		imageSrc: "",
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
			<Image src={recipe.imageSrc}></Image>
			<p>{recipe.description}</p>
		</Container>
	);
};

export default RecipePage;
