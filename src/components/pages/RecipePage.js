import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import FiveStarRating from "../five-star-rating";
import ReviewCard from "../review-card";
import { Row } from "react-bootstrap";
import { createRecipe, removeRecipe } from "../../reducers/recipeSlice";

const RecipePage = () => {
	const { recipeId } = useParams();
	const recipe = useSelector((state) =>
		state.value.find((recipe) => recipe.id === parseInt(recipeId))
	);

	const [updatedRecipe, setUpdatedRecipe] = useState([]);
	const [isUpdating, setIsUpdating] = useState(false);

	const dispatch = useDispatch();

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleDelete = () => {
		dispatch(removeRecipe(recipeId));
		setShow(false);
	};
	const handleShow = () => setShow(true);

	const editRecipe = () => {
		setIsUpdating(true);
		dispatch(createRecipe());
	};

	const updateRecipe = () => {
		setIsUpdating(true);
		dispatch(updateRecipe());
		setIsUpdating(false);
	};

	return (
		<Container>
			<h1>
				{isUpdating ? (
					<Form.Group controlId={`inputListFormRow.RecipeTitle`}>
						<Form.Control
							as="input"
							placeholder={recipe?.title}
							onChange={(e) =>
								setUpdatedRecipe({ ...updatedRecipe, title: e.target.value })
							}
						/>
					</Form.Group>
				) : (
					recipe?.title
				)}
			</h1>
			{/* <FiveStarRating rating={recipe?.rating} /> */}
			<p>
				{" "}
				{isUpdating ? (
					<Form.Group controlId={`inputListFormRow.RecipeAuthor`}>
						<Form.Control
							as="input"
							placeholder={recipe?.author}
							onChange={(e) =>
								setUpdatedRecipe({ ...updatedRecipe, author: e.target.value })
							}
						/>
					</Form.Group>
				) : (
					recipe?.author
				)}
			</p>
			<Row className="recipe-header">
				<div className="col-md-4">
					<Image src={recipe?.media?.imageUrls[0]} width="100%" />
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
										placeholder={recipe?.preparationTime}
										onChange={(e) =>
											setUpdatedRecipe({
												...updatedRecipe,
												preparationTime: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								recipe?.preparationTime
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
										placeholder={recipe?.cookTime}
										onChange={(e) =>
											setUpdatedRecipe({
												...updatedRecipe,
												cookTime: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								recipe?.cookTime
							)}{" "}
							min
						</li>
						<li>
							{" "}
							Total Time: {recipe?.preparationTime + recipe?.cookTime} min
						</li>
						<li>
							{" "}
							Total Serving:{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.RecipeTotalServings`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={recipe?.totalServings}
										onChange={(e) =>
											setUpdatedRecipe({
												...updatedRecipe,
												totalServings: e.target.value,
											})
										}
									/>
								</Form.Group>
							) : (
								recipe?.totalServings
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
							onClick={handleShow}
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
							<Button variant="primary" onClick={handleDelete}>
								Delete
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</Row>
			<Row className="ingredients-container">
				<h3>Ingredients</h3>
				<ul>
					{recipe?.ingredients?.map((ingredient, index) => (
						<li key={index}>
							{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.Ingredient`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={ingredient}
										onChange={(e) =>
											setUpdatedRecipe({
												...updatedRecipe,
												ingredient: e.target.value,
											})
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
					{recipe?.directions?.map((direction, index) => (
						<li key={index}>
							{" "}
							{isUpdating ? (
								<Form.Group controlId={`inputListFormRow.RecipeDirection`}>
									<Form.Control
										as="input"
										rows={3}
										placeholder={direction}
										onChange={(e) =>
											setUpdatedRecipe({
												...updatedRecipe,
												direction: e.target.value,
											})
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
								placeholder={recipe?.description}
								onChange={(e) =>
									setUpdatedRecipe({
										...updatedRecipe,
										description: e.target.value,
									})
								}
							/>
						</Form.Group>
					) : (
						recipe?.description
					)}
				</p>
			</Row>
			<Row className="review-container">
				<h3>Reviews</h3>
				{recipe?.reviews?.map((review) => (
					<ReviewCard className="col-md-3" review={review} key={review.id} />
				))}
			</Row>
		</Container>
	);
};

function areEqual(prevProps, nextProps) {
	/*
  return true if passing nextProps to render would return
  the same result as passing prevProps to render,
  otherwise return false
  */
	return true;
}

export default React.memo(RecipePage, areEqual);
