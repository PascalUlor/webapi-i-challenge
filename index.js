// implement your API here
const express = require("express");
const Users = require("./data/db");

const port = 3000 || process.env;
const server = express();

server.use(express.json());

server.get("/api/users/", (req, res) => {
  Users.find()
    .then(users => {
      console.log(res);
      if (!users) {
        res.status(404).json({
          status: 404,
          message: "No users available"
        });
      }
      res.status(200).json(users);
    })
    .catch(err =>
      res.status(500).json({
        status: 500,
        message: "internal server error"
      })
    );
});

/**
 * All wrong routes
 */
server.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Wrong route"
  });
});

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
