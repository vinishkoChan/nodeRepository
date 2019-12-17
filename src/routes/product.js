const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

//router.get("/", productController.index);
router.post("/create", productController.createProduct);
router.put("/change/:id", productController.changeProduct);
router.delete("/delete/:id", productController.deleteProduct);
router.get("/", productController.list);

module.exports = router;
