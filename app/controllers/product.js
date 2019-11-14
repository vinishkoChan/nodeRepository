const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", urlencodedParser, function(req, res) {
  res.send("Here are the Product route");
});

router.post("/create", urlencodedParser, function(req, res) {
  res.send("New product created: " + JSON.stringify(req.body));
});

module.exports = router;
