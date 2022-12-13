const express = require("express");
const server = express();
const path = require("path");
const bodyParser = require("body-parser");

server.use(express.static(path.join(__dirname, "public")));
server.use(bodyParser.urlencoded({ extended: false }));

const handleLoginRequest = (req, res) => {
  // const { name, email, password } = req.body;
  console.log(`Data collected:${req.body}`);
  res.send("Sent succesfully");
};

server.post("/login", handleLoginRequest);

server.listen(3000, () => console.log("Server is ready"));
