const express = require("express");
const Authentication = require("../Authentication/auth");
const GallaryController = require("../Controllers/gallary");
const router = express.Router();

router.post("/add", Authentication.adminFacultyAuth, GallaryController.addImage);
router.get("/get", GallaryController.getAllGallary);
router.delete("/delete/:id", Authentication.adminFacultyAuth, GallaryController.deleteImageById);
module.exports = router;
