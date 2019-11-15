const bodyParser = require("body-parser");
const express = require("express");
const productController = require("../controllers/productController");

const productRouter = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

productRouter.get("/", urlencodedParser, productController.index);
productRouter.post(
  "/create",
  urlencodedParser,
  productController.createProduct
);

module.exports = productRouter;
