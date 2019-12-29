const express = require("express");
const productController = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isUser = require("../middleware/isUser");

const router = express.Router();

router.get("/", productController.list);
router.put("/:id/mark", isUser, productController.setMark);
router.delete("/:id/mark", isUser, productController.deleteMark);
router.use(isAdmin);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
