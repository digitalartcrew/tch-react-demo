import "./App.css";
import AddRecipePage from "./components/pages/AddRecipePage";
import RecipePage from "./components/pages/RecipePage";
import HomePage from "./components/pages/HomePage";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNavBar from "./components/nav/MainNavBar";

const App = () => {
	return (
		<Router>
			<Container className="App">
				<MainNavBar />
				<Switch>
					<Route path="/recipe/:recipeId" component={RecipePage} />
					<Route path="/add-recipe" component={AddRecipePage} />
					<Route exact strict path="/" component={HomePage} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
