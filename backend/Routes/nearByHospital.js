const express = require("express");
const Authentication = require("../Authentication/auth");
const HospitalController = require("../Controllers/nearByHospital");
const router = express.Router();

router.post("/add", Authentication.adminFacultyAuth, HospitalController.addNearByHospital);

//anyone can see all hospitals
router.get("/get", HospitalController.getHospitals);
router.put("/update/:id", Authentication.adminFacultyAuth, HospitalController.updateHospitalById);
router.delete("/delete/:id", Authentication.adminFacultyAuth, HospitalController.deleteHospitalById);


module.exports = router;

