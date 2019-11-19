const express = require("express");
const homeController = require("../controllers/loginController");

const router = express.Router();

router.post("/", homeController.login, (req, res) => {
  res.send(`You're successfully logged in as ${req.user.login}`);
});

module.exports = router;
