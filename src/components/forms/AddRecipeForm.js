import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
// import store from "../../store";
import InputListFormRowContainer from "./rows/InputListFormRowContainer";

const AddRecipeForm = ({ history, name, controlId }) => {
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
		instructions: [],
		supplies: [],
		description: "",
	});

	const handleSubmit = () => {
		console.log("Recipe form data: ", recipeFormData);
	};

	return (
		<Container>
			<Row className="recipe-form-row">
				<Form.Group controlId={`recipeForm.${controlId}`}>
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

			<Row className="recipe-form-row">
				<Form.Group controlId="formFile">
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

			<Row className="recipe-form-row">
				<Form.Group controlId="formFile">
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

			<Row className="recipe-form-row">
				{recipeFormData?.imgUrls[0] ? (
					<Image src={recipeFormData?.imgUrls[0]} />
				) : null}

				<Form.Group controlId="formFile">
					<Form.Label>Upload Image 2</Form.Label>
					<Form.Control
						type="file"
						onChange={(e) =>
							setRecipeFormData({
								...recipeFormData,
								imgUrls: [...recipeFormData.imgUrls, e.target.files[0].name],
							})
						}
					/>
				</Form.Group>
			</Row>

			<Row className="recipe-form-row">
				<Form.Group controlId="formFile">
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

			<Row className="recipe-form-row">
				<Form.Group controlId="formFile">
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

			<Row className="recipe-form-row">
				<Form.Group controlId="formFile">
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

			<InputListFormRowContainer
				titleOfRow="List of instructions"
				addBtnTitle="Add Instruction"
				handleChange={(e) =>
					setRecipeFormData({
						...recipeFormData,
						instructions: [...recipeFormData.instructions, e.target.value],
					})
				}
			/>

			<InputListFormRowContainer
				titleOfRow="List of supplies"
				addBtnTitle="Add Supply"
				handleChange={(e) =>
					setRecipeFormData({
						...recipeFormData,
						supplies: [...recipeFormData.supplies, e.target.value],
					})
				}
			/>

			<InputListFormRowContainer
				titleOfRow="List of ingredients"
				addBtnTitle="Add Ingredient"
				handleChange={(e) =>
					setRecipeFormData({
						...recipeFormData,
						ingredients: [...recipeFormData.ingredients, e.target.value],
					})
				}
			/>

			<Row className="recipe-form-row">
				<Form.Group controlId="recipeForm.PreparationTime">
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

			<Row className="recipe-form-row">
				<Form.Group controlId="recipeForm.CookTime">
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

			<Row className="recipe-form-row">
				<Form.Group controlId="recipeForm.TotalServings">
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

			<Row className="recipe-form-row">
				<Form.Group controlId="recipeForm.Description">
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
