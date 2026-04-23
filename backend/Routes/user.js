const express = require("express");
const UserController = require("../Controllers/user");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post('/send-otp', UserController.sendOtp);
router.post('/verify-otp', UserController.verifyOtp);
router.post('/reset-password', UserController.resetPassword);

module.exports = router;