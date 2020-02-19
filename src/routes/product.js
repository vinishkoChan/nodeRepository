const express = require("express");
const productController = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isUser = require("../middleware/isUser");
const validate = require("../middleware/validate");
const ProductScheme = require("../schemes/product");
const multer = require('multer');
const storage = require("../config").storage;
const upload = multer({storage: storage});

const router = express.Router();

router.get("/", productController.list);
router.get("/search", productController.search);
router.get("/:id/image", productController.getImage);
router.post("/:id/image", upload.single('image'), productController.setImage);
router.put("/:id/mark", isUser, productController.setMark);
router.delete("/:id/mark", isUser, productController.deleteMark);
router.use(isAdmin);
router.post("/", validate(ProductScheme.create), productController.create);
router.put("/:id", validate(ProductScheme.update), productController.update);
router.delete("/:id", productController.delete);

module.exports = router;
