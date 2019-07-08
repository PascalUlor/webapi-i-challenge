// implement your API here
const express = require("express");
const lamb = require("./data/db");

const port = 3000 || process.env;
const server = express();

server.use(express.json());

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
