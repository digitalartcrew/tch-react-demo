import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import rootReducer from "./reducer";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
// import "./scss/App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

store.dispatch({
	type: "recipes/recipeAdded",
	payload: {
		id: 5,
		imageSrc: "https://via.placeholder.com/200x200",
		title: "The Best Chicken",
		description:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, vero quisquam magnam voluptatibus minus asperiores excepturi distinctio voluptas! Sint at facilis alias suscipit aut quia ea in sequi quisquam nulla!",
	},
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
