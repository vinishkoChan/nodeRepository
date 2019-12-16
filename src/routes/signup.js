const express = require("express");
const signupController = require("../controllers/signup");
const userMiddle = require("../middleware/user");
const errorsMiddle = require("../middleware/errors");

const router = express.Router();

router.post(
  "/",
  userMiddle.signup,
  errorsMiddle.validReg,
  signupController.signup
);

module.exports = router;
