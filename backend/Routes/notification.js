const express = require("express");
const Authentication = require("../Authentication/auth");
const NotificationController = require("../Controllers/notification");
const router = express.Router();

router.post("/add", Authentication.adminFacultyAuth, NotificationController.addNotification);
router.get('/get', NotificationController.getNotifications);
router.delete("/delete/:id", Authentication.adminFacultyAuth, NotificationController.deleteNotificationById);

module.exports = router;
