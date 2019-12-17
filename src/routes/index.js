const productRouter = require("./product");
const loginRouter = require("./login");
const signupRouter = require("./signup");

const express = require("express");
const router = express.Router();

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/product", productRouter);

module.exports = router;
