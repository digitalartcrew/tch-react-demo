import "./App.css";
import React, { useState, useEffect } from "react";
import AddRecipeForm from "./components/forms/AddRecipeForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
 
  const [recipeCollection, setRecipeCollection] = useState([]);

  const getRecipes =()=> {
    fetch('data/recipes.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(response =>{
        console.log(response)
        return response.json();
      })
      .then(recipes => {
        console.log(recipes);
        setRecipeCollection([...recipes])
      });
	}
  

  useEffect(() => {
	getRecipes();

  },[])

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
        {collection.map((recipe) => (
          <EntityCard entity={recipe} key={recipe.id} />
        ))}
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
    <AddRecipeForm />
    </div>
  );
};



export default App;
