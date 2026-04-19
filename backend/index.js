const express = require("express");
const app = express();

app.use(express.json());
require('./connection');    //by this line we are connecting to MongoDb Cloud, through connection.js file
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the backend of the dispensary management system!" });
})

app.listen(4000, () => {
  console.log("Server running on Port 4000");
})


