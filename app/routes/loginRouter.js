const express = require("express");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.post("/", loginController.login, (req, res) => {
  res.send(`Welcome, ${req.user.firstName}`);
});

module.exports = router;
