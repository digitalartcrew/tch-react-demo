

const initialState = {
  recipes: [
    {
      id: 1,
      imageSrc: "https://via.placeholder.com/200x200",
      title: "Title1",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, vero quisquam magnam voluptatibus minus asperiores excepturi distinctio voluptas! Sint at facilis alias suscipit aut quia ea in sequi quisquam nulla!",
    },
    {
      id: 2,
      imageSrc: "https://via.placeholder.com/200x200",
      title: "Title2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, vero quisquam magnam voluptatibus minus asperiores excepturi distinctio voluptas! Sint at facilis alias suscipit aut quia ea in sequi quisquam nulla!",
    },
    {
      id: 3,
      imageSrc: "https://via.placeholder.com/200x200",
      title: "Title3",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, vero quisquam magnam voluptatibus minus asperiores excepturi distinctio voluptas! Sint at facilis alias suscipit aut quia ea in sequi quisquam nulla!",
    },
    {
      id: 4,
      imageSrc: "https://via.placeholder.com/200x200",
      title: "Title4",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, vero quisquam magnam voluptatibus minus asperiores excepturi distinctio voluptas! Sint at facilis alias suscipit aut quia ea in sequi quisquam nulla!",
    },
  ],
};

function nextRecipeId() {
  return initialState.recipes[initialState.recipes.length - 1].id + 1;
}

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "recipes/recipeAdded": {
      return {
        ...state,
        recipes: [
          ...state.recipes,
          
            {
              nextRecipeId,
              ...action.payload

            }
        ],
      };
    }

    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}

export default recipesReducer;
