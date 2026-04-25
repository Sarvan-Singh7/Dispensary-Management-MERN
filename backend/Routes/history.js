const express = require("express");
const Authentication = require("../Authentication/auth");
const router = express.Router(); 
const HistoryController = require("../Controllers/history");

router.post('/add',Authentication.adminFacultyAuth,HistoryController.addHistory)

router.get('/get-history',Authentication.adminFacultyAuth,HistoryController.getHistoryByDate)
router.get('/get',Authentication.studentAuth,HistoryController.getStudentHistory)
module.exports = router;