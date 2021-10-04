import "./App.css";
import NavBar from "./components/nav/NavBar";
import AddRecipePage from "./components/pages/AddRecipePage";
import HomePage from "./components/pages/HomePage";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
	const [recipeCollection, setRecipeCollection] = useState([]);

	const getRecipes = () => {
		fetch("data/recipes.json", {
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		})
			.then((response) => {
				console.log(response);
				return response.json();
			})
			.then((recipes) => {
				console.log(recipes);
				setRecipeCollection([...recipes]);
			});
	};

	useEffect(() => {
		getRecipes();
	}, [recipeCollection]);

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

export default App;
