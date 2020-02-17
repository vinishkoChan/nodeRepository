const express = require("express");
const productTagController = require("../controllers/productTag");
const isAdmin = require("../middleware/isAdmin");


const router = express.Router();

router.use(isAdmin);
router.get("/:productId", productTagController.list);
router.post("/:productId",  productTagController.create);
router.delete("/:productId/:tagId", productTagController.delete);

module.exports = router;