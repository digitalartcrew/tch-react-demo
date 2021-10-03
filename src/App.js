import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const recipes = [
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
  ];

  const [recipeCollection, setRecipeCollection] = useState([...recipes]);

  return (
      <Router>
        <div className="App">
			<NavBar />
			<Switch>
				<Route path="/add-recipe">
					<AddRecipePage />
				</Route>
				<Route path="/">
					<HomePage collection={recipeCollection} />
				</Route>
			</Switch>
		</div>
	</Router>
  );
};

const HomePage = ({ collection }) => {
  return (
      <div className="home-page-container">
        <div className="card-container">
          {collection.map((recipe) => <EntityCard entity={recipe} key={recipe.id} />)}
        </div>
      </div>
  );
};

const NavBar = () => {
  return (
      <div>
        <nav>
          <ul className="navigation-bar">
            <li>
              <Link to="/">Tech, Chicken and HS</Link>
            </li>
            <li>
              <input type="text" placeholder="Search..." />
            </li>
            <li>
              <Link to="/add-recipe">Add +</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

const EntityCard = ({ entity }) => {
  return (
    <div className="entity-card">
      <img src={entity.imageSrc} alt="placeholder card" />
      <div className="entity-card-details">
        <h5>{entity.title}</h5>
        <p className="entity-card-description">{entity.description}</p>
      </div>
    </div>
  );
};

const AddRecipePage = () => {
	return (
		<div>
			<h1>Add Recipe Page</h1>
			<form></form>
		</div>
	)
};

export default App;
