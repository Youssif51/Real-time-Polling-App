const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const redis = require("redis");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const client = redis.createClient();

client.on("connect", () => {
  console.log("Redis connected successfully!");
});

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

client.connect();

client.set(
  "votes",
  JSON.stringify({
    option1: 0,
    option2: 0,
    option3: 0,
  })
);

app.use(express.static("public"));

io.on("connection", async (socket) => {
  console.log("New client connected!");

  const votes = JSON.parse(await client.get("votes"));
  socket.emit("updateResults", votes);

  socket.on("vote", async (option) => {
    const votes = JSON.parse(await client.get("votes"));
    if (votes[option] !== undefined) {
      votes[option]++;
      await client.set("votes", JSON.stringify(votes));
      io.emit("updateResults", votes);
    } else {
      socket.emit("voteError", "Invalid option! Please try again.");
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected!");
  });
});

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
