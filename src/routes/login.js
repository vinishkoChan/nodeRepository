const express = require("express");
const loginController = require("../controllers/login");
const validate = require("../middleware/validate");
const UserScheme = require("../schemes/user");

const router = express.Router();

router.post("/", validate(UserScheme.login), loginController.login);

module.exports = router;
