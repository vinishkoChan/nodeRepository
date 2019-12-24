const productRouter = require("./product");
const loginRouter = require("./login");
const signupRouter = require("./signup");
const usersRouter = require("./user");
const deleteAccountRouter = require("./deleteAccount");
const isAuthorized = require("../middleware/isAuthorized");

const express = require("express");
const router = express.Router();

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use(isAuthorized);
router.use("/product", productRouter);
router.use("/users", usersRouter);
router.use("/deleteAccount", deleteAccountRouter);

module.exports = router;
