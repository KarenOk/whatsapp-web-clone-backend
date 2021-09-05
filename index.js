const express = require("express");
const { getRandomSentence } = require("./database");

const app = express();
const server = require("http").createServer(app);

app.get("/", (req, res) => {
	res.send(getRandomSentence());
});

app.listen(5001, () => console.log("Server running..."));
