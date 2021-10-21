import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../api/recipe-api";
import FiveStarRating from "../five-star-rating";
import ReviewCard from "../review-card";
import { Row } from "react-bootstrap";
import {
	createRecipe,
	updateRecipe,
	removeRecipe,
} from "../../reducers/recipeSlice";

const RecipePage = () => {
	const { recipeId } = useParams();
	const [isUpdating, setIsUpdating] = useState(false);

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [recipe, setRecipe] = useState({});

	const editRecipe = () => {
		setIsUpdating(true);
		dispatch(createRecipe());
	};

	const deleteRecipe = () => {
		handleShow();
		dispatch(removeRecipe());
	};

	const updateRecipe = () => {
		setIsUpdating(true);
		dispatch(updateRecipe());
		setIsUpdating(false);
	};

	useEffect(() => {
		getRecipe(recipeId).then((recipe) => {
			setRecipe(recipe);
		});
	}, [recipeId, recipe]);

	return (
		<Container>
			<h1>
				{isUpdating ? (
					<Form.Group controlId={`inputListFormRow.RecipeTitle`}>
						<Form.Control
							as="input"
							placeholder={recipe.title}
							onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
						/>
					</Form.Group>
				) : (
					recipe.title
				)}
			</h1>
			<FiveStarRating rating={recipe.rating} />
			<p>
				{" "}
				{isUpdating ? (
					<Form.Group controlId={`inputListFormRow.RecipeAuthor`}>
						<Form.Control
							as="input"
							placeholder={recipe.author}
							onChange={(e) => setRecipe({ ...recipe, author: e.target.value })}
						/>
					</Form.Group>
				) : (
					recipe.author
				)}
			</p>
			<Row className="recipe-header">
				<div className="col-md-4">
					<Image src={recipe.media.imageUrls[0]} width="100%" />
				</div>

				<div className="col-md-4">
					<ul>
						<li>
							{" "}
							Preparation Time:{" "}
							{isUpdating ? (
								<Form.Group
									controlId={`inputListFormRow.RecipePreparationTime`}
								>
									<Form.Control
										as="input"
										rows={3}
										placeholder={recipe.preparationTime}
										onChange={(e) =>
											setRecipe({ ...recipe, preparationTime: e.target.value })
										}
									/>
								</Form.Group>
							) : (
								recipe.preparationTime
							)}{" "}
							min
						</li>
						<li>
							{" "}
							Cook Time:{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.RecipeCookTime`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={recipe.cookTime}
										onChange={(e) =>
											setRecipe({ ...recipe, cookTime: e.target.value })
										}
									/>
								</Form.Group>
							) : (
								recipe.cookTime
							)}{" "}
							min
						</li>
						<li> Total Time: {recipe.preparationTime + recipe.cookTime} min</li>
						<li>
							{" "}
							Total Serving:{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.RecipeTotalServings`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={recipe.totalServings}
										onChange={(e) =>
											setRecipe({ ...recipe, totalServings: e.target.value })
										}
									/>
								</Form.Group>
							) : (
								recipe.totalServings
							)}
						</li>
					</ul>
				</div>

				<div className="col-md-4">
					{isUpdating ? (
						<Button
							className="recipe-action-btn"
							onClick={() => updateRecipe()}
						>
							Save
						</Button>
					) : (
						<Button className="recipe-action-btn" onClick={editRecipe}>
							Edit
						</Button>
					)}

					{!isUpdating ? (
						<Button
							variant="danger"
							className="recipe-action-btn"
							onClick={deleteRecipe}
						>
							Delete
						</Button>
					) : null}

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title></Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Are you sure you want to delete this recipe?
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Delete
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</Row>
			<Row className="ingredients-container">
				<h3>Ingredients</h3>
				<ul>
					{recipe.ingredients?.map((ingredient, index) => (
						<li key={index}>
							{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.Ingredient`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={ingredient}
										onChange={(e) =>
											setRecipe({ ...recipe, ingredient: e.target.value })
										}
									/>
								</Form.Group>
							) : (
								ingredient
							)}
						</li>
					))}
				</ul>
			</Row>
			<Row className="directions-container">
				<h3>Instructions</h3>
				<ul>
					{recipe.directions?.map((direction, index) => (
						<li key={index}>
							{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.RecipeDirection`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={direction}
										onChange={(e) =>
											setRecipe({ ...recipe, direction: e.target.value })
										}
									/>
								</Form.Group>
							) : (
								direction
							)}
						</li>
					))}
				</ul>
			</Row>
			<Row className="description-container">
				<h3>Additonal Tips & Advice</h3>
				<p>
					{" "}
					{isUpdating ? (
						<Form.Group controlId={`inputListFormRow.RecipeDescription`}>
							<Form.Control
								as="input"
								rows={3}
								placeholder={recipe.description}
								onChange={(e) =>
									setRecipe({ ...recipe, description: e.target.value })
								}
							/>
						</Form.Group>
					) : (
						recipe.description
					)}
				</p>
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
