const productService = require("../services/product");
const creationError = require("../errors/CreationError");
const updateError = require("../errors/UpdateError");

class ProductController {
  async createProduct(req, res, next) {
    const productData = req.body;
    productData.upd_date = new Date();
    try {
      res.send(await productService.create(productData));
    } catch (err) {
      return next(new creationError("Product Creation Error"));
    }
  }

  async changeProduct(req, res, next) {
    const productId = req.params.id;
    const productData = req.body;
    try {
      res.send(await productService.change(productId, productData));
    } catch (err) {
      return next(new updateError("Failed to change product info"));
    }
  }

  async deleteProduct(req, res, next) {
    const productId = req.params.id;
    try {
      res.send(await productService.delete(productId));
    } catch (err) {
      return next(new updateError("Failed to delete product"));
    }
  }

  async list(req, res, next) {
    try {
      res.json(await productService.list());
    } catch (err) {
      return next(new updateError("Failed to print list of products"));
    }
  }
}

module.exports = new ProductController();
