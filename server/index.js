const routes = require("./routes");
const express = require("express");
const app = express();

app.use("/api", routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Listening at PORT: ${PORT}`);
});
