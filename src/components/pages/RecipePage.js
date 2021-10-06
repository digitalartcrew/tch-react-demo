import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { getRecipe } from "../../api/recipe-api";
import FiveStarRating from "../five-star-rating";
import ReviewCard from "../review-card";
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
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
			preparatimeTime: "20 min",
			cookTime: "30 min",
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
			<Container className="recipe-header">
				{/* <Container className="media-container">
					{recipe.media?.video ? (
						<VideoPlayer />
					) : (
						<Image src={recipe.imageUrls[0]} />
					)}
					<FoodImageCarousel images={recipe.imageUrls} />
				</Container> */}
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
			<Container className="description-container">
				{recipe.description}
			</Container>
			<Container className="review-container">
				<Accordion defaultActiveKey="0"></Accordion>
				{recipe.reviews?.map((review) => (
					<ReviewCard review={review} key={review.id} />
				))}
			</Container>
		</Container>
	);
};

export default RecipePage;
