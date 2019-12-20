const productService = require("../services/product");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");

class ProductController {
  async createProduct(req, res, next) {
    const productData = req.body;
    try {
      res.send(await productService.create(productData));
    } catch (err) {
      console.log(err);
      return next(new CreationError("Product Creation Error"));
    }
  }

  async changeProduct(req, res, next) {
    const productId = req.params.id;
    const productData = req.body;
    try {
      res.send(await productService.change(productId, productData));
    } catch (err) {
      return next(new UpdateError("Failed to change product info"));
    }
  }

  async deleteProduct(req, res, next) {
    const productId = req.params.id;
    try {
      res.send(await productService.delete(productId));
    } catch (err) {
      return next(new UpdateError("Failed to delete product"));
    }
  }

  async list(req, res, next) {
    try {
      let params = req.query;
      res.json(await productService.list(params));
    } catch (err) {
      return next(new UpdateError("Failed to print list of products"));
    }
  }
}

module.exports = new ProductController();
