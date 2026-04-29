require("dotenv").config();
const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");
const cors = require("cors");
app.use(express.json());
app.use(cookieparser());


app.use(cors({  ///cors is used to allow the frontend to access the backend api, because by default it is not allowed due to security reasons, so we are allowing it by using cors middleware
  credentials: true,  //allow frontend to send cookie to Backend
  origin:"http://localhost:5173"
}));

require('./connection');    //by this line we are connecting to MongoDb Cloud, through connection.js file
const userRoutes = require("./Routes/user");
const facilityRoutes = require("./Routes/facility");
const medicineRoutes = require("./Routes/medicine");
const hospitalRoutes = require("./Routes/nearByHospital")
const notificationRoutes = require("./Routes/notification");
const gallaryRoutes = require("./Routes/gallary");
const historyRoutes = require("./Routes/history");
app.use("/api/auth", userRoutes);
app.use("/api/facility", facilityRoutes);
app.use("/api/medicine", medicineRoutes);
app.use("/api/hospital", hospitalRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/gallary", gallaryRoutes);
app.use("/api/history", historyRoutes);




app.get("/", (req, res) => {
  res.send({ message: "Welcome to the backend of the dispensary management system!" });
})

app.listen(process.env.PORT, () => {
  console.log("Server running on Port ", process.env.PORT);
})


