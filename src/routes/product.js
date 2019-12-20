const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

//router.get("/", productController.index);
router.post("/", productController.createProduct);
router.put("/:id", productController.changeProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/", productController.list);

module.exports = router;
