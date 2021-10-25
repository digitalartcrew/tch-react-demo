const express = require("express");
const router = express.Router();

// GET users
router.get("/users", (req, res) => {
	res.json(`Users`);
});
// POST users/create
router.post("/users/create", (req, res) => {
	res.json(`Users: ${req.body}`);
});
// UPDATE users/:userId
router.put("/users/:userId", (req, res) => {
	res.json(`Updating user: ${req.params.userId}`);
});
// GET users/:userId
router.get("/users/:userId", (req, res) => {
	res.json(`Getting user: ${req.params.userId}`);
});
// DELETE users/:userId
router.delete("/users/:userId", (req, res) => {
	res.json(`Deleting user: ${req.params.userId}`);
});

export default router;
