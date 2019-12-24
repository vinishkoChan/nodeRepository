const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();

router.post("/", productController.create);
router.put("/:id", productController.change);
router.put("/:id/mark", productController.setMark);
router.delete("/:id", productController.delete);
router.get("/", productController.list);

module.exports = router;
