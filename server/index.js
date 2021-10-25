const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth/", authRoutes);
app.use("/api/recipes/", recipeRoutes);
app.use("/api/users/", userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Listening at PORT: ${PORT}`);
});
