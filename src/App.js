import "./App.css";
import React, { useState } from "react";

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
		<div className="App">
			<HomePage collection={recipeCollection} />
		</div>
	);
};

const HomePage = ({ collection }) => {
	return (
		<div className="home-page-container">
			<NavBar />
			<div className="card-container">
				{collection.map((recipe) => (
					<EntityCard entity={recipe} />
				))}
			</div>
		</div>
	);
};

const NavBar = () => {
	return (
		<ul className="navigation-bar">
			<li>Tech, Chicken & HS</li>
			<li>
				<input type="text" placeholder="Search..." />
			</li>
			<li>
				<button onClick="null">Add +</button>
			</li>
		</ul>
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

export default App;
