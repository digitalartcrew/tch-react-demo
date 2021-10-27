const mongoose = require("mongoose");
// const User = require("./user");

const Comments = {};

const recipeSchema = mongoose.Schema({
	imgSrc: String,
	author: String,
	title: String,
	media: {
		video: String,
		imageUrls: [String],
	},
	preparationTime: Number,
	cookTime: Number,
	totalServings: Number,
	ingredients: [String],
	directions: [String],
	description: String,
	reviews: [Comments],
});

module.exports = mongoose.model("Recipe", recipeSchema);
