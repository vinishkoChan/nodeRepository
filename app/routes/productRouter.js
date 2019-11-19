const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.index);
router.post("/create", productController.createProduct);

module.exports = router;
