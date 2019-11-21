const express = require("express");
const loginController = require("../controllers/login");

const router = express.Router();

router.post("/", loginController.login, (req, res) => {
  res.send(`Welcome, ${req.user.first_name}`);
});

module.exports = router;
