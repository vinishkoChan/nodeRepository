const routes = require("../routes/");
const errorHandler = require("../middleware/errorHandler");

const express = require("express");
const router = express.Router();

router.use(routes);
router.use(errorHandler);

module.exports = router;
