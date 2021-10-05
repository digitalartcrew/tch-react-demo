import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import store from "../../store";

const AddRecipeForm = ({ history }) => {
	const [formData, setFormData] = useState({
		imgUrls: [],
		title: "",
		description: "",
		ingredients: [],
		tips: [],
		tools: [],
	});

	const handleSubmit = () => {
		console.log(store.getState());

		store.dispatch({ type: "add-ingredients", payload: formData });
		console.log(store.getState());
	};

	return (
		<>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Upload Image</Form.Label>
				<Form.Control
					type="file"
					onChange={(e) =>
						setFormData({
							...formData,
							images: [...formData.images, e.target.value],
						})
					}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Title of Recipe</Form.Label>
				<Form.Control
					as="input"
					rows={3}
					onChange={(e) =>
						setFormData({ ...formData, description: e.target.value })
					}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Description of recipe</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					onChange={(e) =>
						setFormData({ ...formData, description: e.target.value })
					}
				/>
			</Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Add Prepations Steps</Form.Label>
				<Form.Control
					as="input"
					rows={3}
					onChange={(e) =>
						setFormData({ ...formData, description: e.target.value })
					}
				/>
				<Button>Add Step</Button>
			</Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Add Tools</Form.Label>
				<Form.Control
					as="input"
					rows={3}
					onChange={(e) =>
						setFormData({ ...formData, description: e.target.value })
					}
				/>
				<Button>Add Tool</Button>
			</Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Add Ingredients</Form.Label>
				<Form.Control
					as="input"
					rows={3}
					onChange={(e) =>
						setFormData({ ...formData, description: e.target.value })
					}
				/>
				<Button>Add Ingredient</Button>
			</Form.Group>

			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Additional Tips and Advice</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					onChange={(e) =>
						setFormData({ ...formData, description: e.target.value })
					}
				/>
			</Form.Group>
			<Button onClick={() => handleSubmit()}>Submit Form</Button>
		</>
	);
};

export default AddRecipeForm;
