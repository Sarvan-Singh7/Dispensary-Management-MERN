const express = require("express");
const UserController = require("../Controllers/user");
const router = express.Router();
const Authentication= require("../Authentication/auth")

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post('/send-otp', UserController.sendOtp);
router.post('/verify-otp', UserController.verifyOtp);
router.post('/reset-password', UserController.resetPassword);

// want only particular type of user can access this 
router.put('/update-student/:id',Authentication.adminFacultyAuth,UserController.updateStudentById);

router.get('/get-student-by-roll/:roll',Authentication.adminFacultyAuth,UserController.getStudentByRollNo);

router.post('/registerStudentByStaff',Authentication.adminFacultyAuth,UserController.registerStudentByStaff);



module.exports = router;