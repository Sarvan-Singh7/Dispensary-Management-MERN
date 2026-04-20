require("dotenv").config();
const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(cookieparser());
require('./connection');    //by this line we are connecting to MongoDb Cloud, through connection.js file
const userRoutes = require("./Routes/user");
app.use("/api/auth", userRoutes);
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the backend of the dispensary management system!" });
})

app.listen(4000, () => {
  console.log("Server running on Port 4000");
})


