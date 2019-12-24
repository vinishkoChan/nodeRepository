const express = require("express");
const usersController = require("../controllers/user");

const router = express.Router();

router.get("/", usersController.list);
router.delete("/:id", usersController.delete);

module.exports = router;
