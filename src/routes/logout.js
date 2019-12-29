const express = require("express");
const loginController = require("../controllers/login");

const router = express.Router();

router.post("/", loginController.logout);

module.exports = router;
