const express = require("express");
const server = express();
server.get("/ping", (request, response) => {
  response.status(200).json({ pong: true });
});

server.listen(5000, () => console.log("server started"));
