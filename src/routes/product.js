const express = require("express");
const productController = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isUser = require("../middleware/isUser");
const validate = require("../middleware/validate");
const ProductSceme = require("../schemes/product");

const router = express.Router();

router.get("/", productController.list);
router.put("/:id/mark", isUser, productController.setMark);
router.delete("/:id/mark", isUser, productController.deleteMark);
router.use(isAdmin);
router.post("/", validate(ProductSceme.create), productController.create);
router.put("/:id", validate(ProductSceme.update), productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
