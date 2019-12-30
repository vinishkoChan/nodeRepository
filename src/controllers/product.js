const productService = require("../services/product");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");
const DeleteError = require("../errors/deleteError");
const Response = require("../helpers/response");

class ProductController {
  async create(req, res, next) {
    const productData = req.body;
    try {
      await productService.create(productData);
      res.json(new Response("Creation successful", 200));
    } catch (err) {
      console.log(err);
      return next(new CreationError("Creation failed"));
    }
  }

  async update(req, res, next) {
    const productId = req.params.id;
    const productData = req.body;
    try {
      await productService.update(productId, productData);
      res.json(new Response("Update successful", 200));
    } catch (err) {
      return next(new UpdateError("Failed to change product info"));
    }
  }

  async delete(req, res, next) {
    const productId = req.params.id;
    try {
      await productService.delete(productId);
      res.json(new Response("Delete successcul", 200));
    } catch (err) {
      return next(new DeleteError("Delete failed"));
    }
  }

  async list(req, res, next) {
    try {
      let params = req.query;
      res.json(await productService.list(params));
    } catch (err) {
      console.log(err);
      return next(new UpdateError("Print failed"));
    }
  }

  async setMark(req, res, next) {
    try {
      let userId = req.session.user.id;
      let productId = req.params.id;
      let markValue = req.query.value;

      await productService.setMark(userId, productId, markValue);

      res.json(new Response("Mark set successful", 200));
    } catch (err) {
      console.log(err);
      return next(new UpdateError("Failed to mark product"));
    }
  }

  async deleteMark(req, res, next) {
    try {
      let userId = req.session.user.id;
      let productId = req.params.id;

      await productService.deleteMark(userId, productId);
      res.json(new Response("Mark deleted successful", 200));
    } catch (err) {
      console.log(err);
      return next(new DeleteError("Failed to delete mark"));
    }
  }
}

module.exports = new ProductController();
