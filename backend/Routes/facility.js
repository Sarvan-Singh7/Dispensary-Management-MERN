const express = require("express");
const Authentication = require("../Authentication/auth");
const FacilityController = require("../Controllers/facility");
const router = express.Router();



router.post("/add", Authentication.adminFacultyAuth, FacilityController.addFacility);
router.put("/update/:id", Authentication.adminFacultyAuth, FacilityController.updateFacility);

//anyone can see all facilities
router.get("/get", FacilityController.getAllFacility);

router.delete("/delete/:id", Authentication.adminFacultyAuth, FacilityController.deleteFacility);
module.exports = router;