const productRouter = require("../routes/product");
const loginRouter = require("../routes/login");
const signupRouter = require("../routes/signup");

const express = require("express");
const router = express.Router();

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/product", productRouter);

module.exports = router;
