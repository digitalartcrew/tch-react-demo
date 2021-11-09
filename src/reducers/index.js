import { combineReducers } from "redux";
import recipeSlicereducers from "./recipeSlice";
import podcastSlicereducers from "./podcastSlice";

export default combineReducers({ recipeSlicereducers, podcastSlicereducers });
