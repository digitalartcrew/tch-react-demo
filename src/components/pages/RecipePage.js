import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { getRecipe } from "../../api/recipe-api";
import FiveStarRating from "../five-star-rating";
import ReviewCard from "../review-card";
import { Row } from "react-bootstrap";
// import recipesReducer from "../forms/slices/recipes/recipesSlice";

const RecipePage = () => {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState({
		id: 1,
		imgSrc: "https://via.placeholder.com/100x100",
		title: "Donte's Hot Fried Chicken",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
			preparationTime: 20,
			cookTime: 30,
			totalServings: "8 servings",
			ingredients: [
				"First ingredient",
				"Second ingredient",
				"Third ingredient",
				"Fourth ingredient",
				"Fifth ingredient",
			],
			directions: [
				"First direction",
				"Second direction",
				"Third direction",
				"Fourth direction",
				"Fifth direction",
			],
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
			reviews: [
				{
					id: 1,
					rating: 5,
					message: "It was so delicious",
					review: { userId: 1, username: "test user" },
				},
				{
					id: 2,
					rating: 5,
					message: "It was so delicious",
					review: { userId: 1, username: "test user" },
				},
				{
					id: 3,
					rating: 5,
					message: "It was so delicious",
					review: { userId: 1, username: "test user" },
				},
				{
					id: 4,
					rating: 5,
					message: "It was so delicious",
					review: { userId: 1, username: "test user" },
				},
			],
		},
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
			<p>{recipe.author}</p>
			<Row className="recipe-header">
				<div className="col-md-3">
					<Image src={recipe.media.imageUrls[0]} width="100%" />
				</div>

				<div className="col-md-3">
					<ul>
						<li> Preparation Time: {recipe.preparationTime} min</li>
						<li> Cook Time: {recipe.cookTime} min</li>
						<li> Total Time: {recipe.preparationTime + recipe.cookTime} min</li>
						<li> Total Serving: {recipe.totalServings}</li>
					</ul>
				</div>
			</Row>
			<Row className="ingredients-container">
				<h3>Ingredients</h3>
				<ul>
					{recipe.ingredients?.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</Row>
			<Row className="directions-container">
				<h3>Instructions</h3>
				<ul>
					{recipe.directions?.map((direction, index) => (
						<li key={index}>{direction}</li>
					))}
				</ul>
			</Row>
			<Row className="description-container">
				<h3>Additonal Tips & Advice</h3>
				<p>{recipe.description}</p>
			</Row>
			<Row className="review-container">
				<h3>Reviews</h3>
				{recipe.reviews?.map((review) => (
					<ReviewCard className="col-md-3" review={review} key={review.id} />
				))}
			</Row>
		</Container>
	);
};

export default RecipePage;
