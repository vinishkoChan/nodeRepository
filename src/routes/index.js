const productRouter = require("./product");
const loginRouter = require("./login");
const logoutRouter = require("./logout");
const signupRouter = require("./signup");
const usersRouter = require("./user");
const deleteAccountRouter = require("./deleteAccount");
const isAuthorized = require("../middleware/isAuthorized");
const isNotAuthorized = require("../middleware/isNotAuthorized");
const isAdmin = require("../middleware/isAdmin");

const express = require("express");
const router = express.Router();

router.use("/signup", isNotAuthorized, signupRouter);
router.use("/login", isNotAuthorized, loginRouter);
router.use(isAuthorized);
router.use("/logout", logoutRouter);
router.use("/product", productRouter);
router.use("/deleteAccount", deleteAccountRouter);
router.use(isAdmin);
router.use("/users", usersRouter);

module.exports = router;
