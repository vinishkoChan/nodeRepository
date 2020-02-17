const errorHandler = require("../middleware/errorHandler");

const express = require("express");
const router = express.Router();

const productRouter = require("../routes/product");
const loginRouter = require("../routes/login");
const logoutRouter = require("../routes/logout");
const accountRouter = require("../routes/account");
const signupRouter = require("../routes/signup");
const usersRouter = require("../routes/user");
const requestForDeleteRouter = require("../routes/deleteRequest");
const tagRouter = require("../routes/tag");
const isAuthorized = require("../middleware/isAuthorized");
const isAdmin = require("../middleware/isAdmin");

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use(isAuthorized);
router.use("/account", accountRouter);
router.use("/logout", logoutRouter);
router.use("/product", productRouter);
router.use("/requestForDelete", requestForDeleteRouter);
router.use(isAdmin);
router.use("/tag", tagRouter);
router.use("/users", usersRouter);
router.use(errorHandler);

module.exports = router;
