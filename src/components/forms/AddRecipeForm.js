// import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.
import recipes from "../../recipes";
import React, { useState } from "react";

const AddRecipeForm  = ({history}) => {
	const [formData, setFormData] = useState({imageSrc: '', title: '', description: ''});

	const handleSubmit = () => {
     
        formData.id = recipes[recipes.length - 1].id + 1;

        recipes.push({...formData});
		console.log("Updated recipes", recipes );
    
	}
  
	  return (
		<form onSubmit={() => handleSubmit()}>
		  <label>
			Image:
			<input type="text" name="imageSrc" value={formData.imageSrc} onChange={e => setFormData({...formData, imageSrc: e.target.value})} />
		  </label>
		  <label>
			Title:
			<input type="text" name="title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
		  </label>
		  <label>
			Description:
			<input type="text" name="description" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
		  </label>
		  <button type="submit">Submit</button>
		</form>
	  );
  }

  export default AddRecipeForm;