const express = require("express");
const signupController = require("../controllers/signup");
const validate = require("../middleware/validate");
const UserSceme = require("../schemes/user");

const router = express.Router();

router.post("/", validate(UserSceme.create), signupController.signup);

module.exports = router;
