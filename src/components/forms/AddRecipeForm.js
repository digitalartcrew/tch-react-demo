import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import store from "../../store";

const AddRecipeForm = ({ history, name }) => {
	const [recipeFormData, setRecipeFormData] = useState({
		title: "",
		author: name,
		createdBy: name,
		rating: 0,
		videoSrc: "",
		imgUrls: [],
		preparationTime: 0,
		cookTime: 0,
		ingredients: [],
		instruction: [],
		tools: [],
		description: "",
	});

	const handleSubmit = () => {
		console.log(store.getState());

		store.dispatch({ type: "add-ingredients", payload: recipeFormData });
		console.log(store.getState());
	};

	return (
		<Container>
			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.Tite">
					<Form.Label>Title of Recipe</Form.Label>
					<Form.Control
						as="input"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								title: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Recipe Video (up to 3 minutes)</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								video: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Image 1</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								imgUrls: [...recipeFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Image 2</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								imgUrls: [...recipeFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Image 3</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								imgUrls: [...recipeFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Image 4</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								imgUrls: [...recipeFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group controlId="formFile" className="mb-3">
					<Form.Label>Upload Image 5</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								imgUrls: [...recipeFormData.imgUrls, e.target.value],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.ControlTextarea1">
					<Form.Label>Ingredient 1</Form.Label>
					<Form.Control
						as="input"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								ingredients: [...recipeFormData.ingredient, e.target.value],
							})
						}
					/>
				</Form.Group>

				<Button>Add Ingredient</Button>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.ControlTextarea1">
					<Form.Label>Instruction 1</Form.Label>
					<Form.Control
						as="input"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								instructions: [...recipeFormData.instruction, e.target.value],
							})
						}
					/>
				</Form.Group>

				<Button>Add Instruction</Button>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.Tools">
					<Form.Label>Tool 1</Form.Label>
					<Form.Control
						as="input"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								tools: [...recipeFormData.tools, e.target.value],
							})
						}
					/>
				</Form.Group>
				<Button>Add Tool</Button>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.PreparationTime">
					<Form.Label>Preparation Time</Form.Label>
					<Form.Control
						type="time"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								preparationTime: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.CookTime">
					<Form.Label>Cook Time</Form.Label>
					<Form.Control
						type="time"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								cookTime: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.TotalServings">
					<Form.Label>Total Servings</Form.Label>
					<Form.Control
						type="number"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								totalServings: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row>
				<Form.Group className="mb-3" controlId="recipeForm.Description">
					<Form.Label>Description of recipe</Form.Label>
					<Form.Control
						as="textarea"
						rows={3}
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								description: e.target.value,
							})
						}
					/>
				</Form.Group>
			</Row>

			<Button onClick={() => handleSubmit()}>Submit Form</Button>
		</Container>
	);
};

export default AddRecipeForm;
