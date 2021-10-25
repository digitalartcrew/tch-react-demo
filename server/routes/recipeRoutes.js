import recipes from "./../recipes";

const express = require("express");
const router = express.Router();

// GET recipes
router.get("/recipes", (req, res) => {
	res.json(recipes);
});
// POST recipes/create
router.post("/recipes/create/:userId", (req, res) => {
	res.json(`New recipe: ${req.params.userId}`);
});
// UPDATE recipes/:recipeId
router.put("/recipes/:recipeId/:userId", (req, res) => {
	res.json(`Updating recipe: ${req.params.recipeId}`);
});
// GET recipes/:recipeId
router.get("recipes/:recipeId/:userId", (req, res) => {
	res.json(`Getting recipe: ${req.params.recipeId}`);
});
// DELETE recipes/:recipeId
router.delete("/recipes/:recipeId", (req, res) => {
	res.json(`Deleting recipe: ${req.params.recipeId}`);
});

export default router;
