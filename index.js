const express = require("express");
const { getRandomSentence, getResponseInterval } = require("./utils");

const PORT = process.env.PORT || 5000;
const app = express();
const server = app.listen(PORT, () => console.log("Server running..."));

const io = require("socket.io")(server, { cors: { origin: "*" } });

app.get("/", (req, res) => {
	// Health Check
	res.send("This service is up and running...");
});

io.on("connection", (socket) => {
	socket.on("fetch_response", (data) => {
		const { userId } = data;
		const responseInterval = getResponseInterval(1000, 4000);

		setTimeout(() => {
			socket.emit("start_typing", { userId });

			setTimeout(() => {
				socket.emit("stop_typing", { userId });
				socket.emit("fetch_response", {
					response: getRandomSentence(),
					userId,
				});
			}, responseInterval);
		}, 1500);
	});
});
