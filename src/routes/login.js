const express = require("express");
const loginController = require("../controllers/login");
const userMiddle = require("../middleware/user");

const router = express.Router();

router.post("/", userMiddle.login, loginController.login);

module.exports = router;
