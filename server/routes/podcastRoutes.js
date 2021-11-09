const podcasts = [
	{ id: 1, title: "TCH Episode 1", host: "Donte Burney", audioLink: "" },
	{ id: 2, title: "TCH Episode 2", host: "Donte Burney", audioLink: "" },
	{ id: 3, title: "TCH Episode 3", host: "Donte Burney", audioLink: "" },
	{ id: 4, title: "TCH Episode 4", host: "Donte Burney", audioLink: "" },
	{ id: 5, title: "TCH Episode 5", host: "Donte Burney", audioLink: "" },
	{ id: 6, title: "TCH Episode 6", host: "Donte Burney", audioLink: "" },
	{ id: 7, title: "TCH Episode 7", host: "Donte Burney", audioLink: "" },
	{ id: 8, title: "TCH Episode 8", host: "Donte Burney", audioLink: "" },
];

const express = require("express");
const router = express.Router();

// GET all podcasts
router.get("/", (req, res) => {
	res.json(podcasts);
});

// GET podcasts by podcast id
router.get("/:podcastId", (req, res) => {
	res.json(podcasts);
});

// POST podcasts/create
router.post("/create/:podcastId", (req, res) => {
	res.json(`New podcast: ${req.params.podcastId}`);
});
// UPDATE podcasts/:podcastId
router.put("/:podcastId/:podcastId", (req, res) => {
	res.json(`Updating podcast: ${req.params.podcastId}`);
});

// GET podcasts/:podcastId
router.get("/:podcastId/:podcastId", (req, res) => {
	res.json(`Getting podcast: ${req.params.podcastId}`);
});
// DELETE podcasts/:podcastId
router.delete("/:podcastId", (req, res) => {
	res.json(`Deleting podcast: ${req.params.podcastId}`);
});

module.exports = router;
