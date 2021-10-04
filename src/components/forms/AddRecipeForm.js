// import { withRouter } from 'react-router-dom'; // <--- import `withRouter`. We will use this in the bottom of our file.
import React, { useState } from "react";
import { createStore } from 'redux';
import rootReducer from "../../reducer";

const store = createStore(rootReducer);

const AddRecipeForm = ({ history }) => {
  const [formData, setFormData] = useState({
    imageSrc: "",
    title: "",
    description: "",
  });

  const handleSubmit = (event) => {
      debugger;
    console.log(store.getState());

    store.dispatch({
      type: "recipes/recipeAdded",
      payload: {
        imageSrc: formData.imageSrc,
        title: formData.title,
        description: formData.description
      },
    });

    console.log(store.getState());

    // formData.id = recipes[recipes.length - 1].id + 1;

    // recipes.push({...formData});
    // console.log("Updated recipes", recipes );

  };

  return (
    <form onSubmit={() => handleSubmit()}>
      <label>
        Image:
        <input
          type="text"
          name="imageSrc"
          value={formData.imageSrc}
          onChange={(e) =>
            setFormData({ ...formData, imageSrc: e.target.value })
          }
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipeForm;
