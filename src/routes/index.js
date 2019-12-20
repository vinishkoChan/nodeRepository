const productRouter = require("./product");
const loginRouter = require("./login");
const signupRouter = require("./signup");
const isAuthorized = require("../middleware/isAuthorized");

const express = require("express");
const router = express.Router();

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use(isAuthorized);
router.use("/product", productRouter);

module.exports = router;
