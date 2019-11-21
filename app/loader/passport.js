const passport = require("passport");

const express = require("express");
const router = express.Router();

require("../config/passport")(passport);

router.use(passport.initialize());

module.exports = router;
