const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const recipes = [
	{
		id: 1,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 1",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 2,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 2",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 3,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 3",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 4,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 4",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 5,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 5",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 6,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 6",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 7,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 7",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 8,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 8",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 9,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 9",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 10,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 10",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 11,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 11",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
	{
		id: 12,
		imgSrc: "https://via.placeholder.com/100x100",
		author: "Donte Burney",
		title: "Donte's Hot Fried Chicken 12",
		media: {
			video:
				"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
			imageUrls: [
				"https://via.placeholder.com/300x300",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
				"https://via.placeholder.com/10x10",
			],
		},
		preparationTime: 20,
		cookTime: 30,
		totalServings: "8 servings",
		ingredients: [
			"First ingredient",
			"Second ingredient",
			"Third ingredient",
			"Fourth ingredient",
			"Fifth ingredient",
		],
		directions: [
			"First direction",
			"Second direction",
			"Third direction",
			"Fourth direction",
			"Fifth direction",
		],
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, quisquam sapiente asperiores laborum tempora deserunt voluptatem? Quisquam cupiditate consectetur ducimus eveniet nisi! Numquam tempora totam nesciunt expedita minus vitae magni.",
		reviews: [
			{
				id: 1,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 2,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 3,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
			{
				id: 4,
				rating: 5,
				message: "It was so delicious",
				username: "test user",
				date: "1/1/2022",
			},
		],
	},
];

// GET users
app.get("/api/users", (req, res) => {
	res.json(`Users`);
});
// POST users/create
app.post("/api/users/create", (req, res) => {
	res.json(`Users: ${req.body}`);
});
// UPDATE users/:userId
app.put("/api/users/:userId", (req, res) => {
	res.json(`Updating user: ${req.params.userId}`);
});
// GET users/:userId
app.get("/api/users/:userId", (req, res) => {
	res.json(`Getting user: ${req.params.userId}`);
});
// DELETE users/:userId
app.delete("/api/users/:userId", (req, res) => {
	res.json(`Deleting user: ${req.params.userId}`);
});

// GET recipes
app.get("/api/recipes", (req, res) => {
	res.json(recipes);
});
// POST recipes/create
app.post("/api/recipes/create/:userId", (req, res) => {
	res.json(`New recipe: ${req.params.userId}`);
});
// UPDATE recipes/:recipeId
app.put("/api/recipes/:recipeId/:userId", (req, res) => {
	res.json(`Updating recipe: ${req.params.recipeId}`);
});
// GET recipes/:recipeId
app.get("recipes/:recipeId/:userId", (req, res) => {
	res.json(`Getting recipe: ${req.params.recipeId}`);
});
// DELETE recipes/:recipeId
app.delete("/api/recipes/:recipeId", (req, res) => {
	res.json(`Deleting recipe: ${req.params.recipeId}`);
});

app.listen(PORT, () => {
	console.log(`Listening at PORT: ${PORT}`);
});
