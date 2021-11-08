import "./App.css";
import AddRecipePage from "./components/pages/AddRecipePage";
import RecipePage from "./components/pages/RecipePage";
import RecipesPage from "./components/pages/RecipesPage";
import LoginPage from "./components/pages/LoginPage";
import MeetUpsPage from "./components/pages/MeetUpsPage";
import SignUpPage from "./components/pages/SignUpPage";
import UserProfilePage from "./components/pages/UserProfilePage";
import TechBlogPage from "./components/pages/TechBlogPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import PodcastPage from "./components/pages/PodcastPage";
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
					<Route path="/recipes" component={RecipesPage} />
					<Route path="/recipe/:recipeId" component={RecipePage} />
					<Route path="/podcasts" component={PodcastPage} />
					<Route path="/meetups" component={MeetUpsPage} />
					<Route path="/login" component={LoginPage} />
					<Route path="/signup" component={SignUpPage} />
					<Route path="/tech-blog" component={TechBlogPage} />
					<Route path="/user-profile/:userId" component={UserProfilePage} />
					<Route path="/add-recipe" component={AddRecipePage} />
					<Route path="/forgot-password" component={ForgotPasswordPage} />
					<Route exact strict path="/" component={HomePage} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
