import "./App.css";
import AddRecipePage from "./components/pages/AddRecipePage";
import HomePage from "./components/pages/HomePage";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/nav/MainNavBar";

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
	}, []);

	return (
		<Router>
			<Container className="App">
				<MainNavBar />
				<Switch>
					<Route path="/add-recipe">
						<AddRecipePage />
					</Route>
					<Route path="/">
						<HomePage collection={recipeCollection} />
					</Route>
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
