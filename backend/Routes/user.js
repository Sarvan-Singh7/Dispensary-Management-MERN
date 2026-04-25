const express = require("express");
const UserController = require("../Controllers/user");
const router = express.Router();
const Authentication= require("../Authentication/auth")

//auth routes
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post('/send-otp', UserController.sendOtp);
router.post('/verify-otp', UserController.verifyOtp);
router.post('/reset-password', UserController.resetPassword);



/////////student routes

// want only particular type of user can access this 
router.put('/update-student/:id',Authentication.adminFacultyAuth,UserController.updateStudentById);

router.get('/get-student-by-roll/:roll',Authentication.adminFacultyAuth,UserController.getStudentByRollNo);

router.post('/registerStudentByStaff',Authentication.adminFacultyAuth,UserController.registerStudentByStaff);


///////////staff routes
router.post("/add-staff",Authentication.adminFacultyAuth,UserController.addStaffByAdmin);

//we are not using middleware because  we will show too all whether login or logout
router.get("/get-staff",UserController.getAllStaffs);

router.put("/update-staff/:id",Authentication.adminFacultyAuth,UserController.updateStaffById);

router.delete("/delete-staff/:id",Authentication.adminFacultyAuth,UserController.deleteStaff);



//this route is for all
router.post("/logout", Authentication.studentAuth, UserController.logout);







module.exports = router;