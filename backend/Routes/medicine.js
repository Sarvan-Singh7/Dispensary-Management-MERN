const express = require("express");
const Authentication = require("../Authentication/auth");
const MedicineController = require("../Controllers/medicine");
const router = express.Router();

router.post("/add", Authentication.adminFacultyAuth, MedicineController.addMedicine);
router.get("/get", MedicineController.getMedicine);
router.put("/update/:id", Authentication.adminFacultyAuth, MedicineController.updateMedicineById);
router.get("/search-by-name", MedicineController.searchMedicine);

router.delete("/delete/:id", Authentication.adminFacultyAuth, MedicineController.deleteMedicineById);

module.exports = router;