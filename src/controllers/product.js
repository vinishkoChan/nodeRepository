const productService = require("../services/product");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");

class ProductController {
  async create(req, res, next) {
    const productData = req.body;
    try {
      res.send(await productService.create(productData));
    } catch (err) {
      console.log(err);
      return next(new CreationError("Product Creation Error"));
    }
  }

  async change(req, res, next) {
    const productId = req.params.id;
    const productData = req.body;
    try {
      res.send(await productService.change(productId, productData));
    } catch (err) {
      return next(new UpdateError("Failed to change product info"));
    }
  }

  async delete(req, res, next) {
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

  async setMark(req, res, next) {
    try {
      let userId = req.session.user.id;
      let productId = req.params.id;
      let markValue = req.query.value;
      res.send(await productService.setMark(userId, productId, markValue));
    } catch (err) {
      return next(new UpdateError("Failed to mark product"));
    }
  }
}

module.exports = new ProductController();
