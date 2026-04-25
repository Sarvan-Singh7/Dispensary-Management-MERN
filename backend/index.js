require("dotenv").config();
const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

app.use(express.json());
app.use(cookieparser());
require('./connection');    //by this line we are connecting to MongoDb Cloud, through connection.js file
const userRoutes = require("./Routes/user");
const facilityRoutes = require("./Routes/facility");
const medicineRoutes = require("./Routes/medicine");
app.use("/api/auth", userRoutes);
app.use("/api/facility", facilityRoutes);
app.use("/api/medicine", medicineRoutes);
app.get("/", (req, res) => {
  res.send({ message: "Welcome to the backend of the dispensary management system!" });
})

app.listen(process.env.PORT, () => {
  console.log("Server running on Port ", process.env.PORT);
})


