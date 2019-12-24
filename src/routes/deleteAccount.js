const express = require("express");
const deleteAccountController = require("../controllers/deleteAccount");

const router = express.Router();

router.post("/", deleteAccountController.create);

module.exports = router;
