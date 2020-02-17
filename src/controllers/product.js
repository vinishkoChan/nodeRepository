const productService = require("../services/product");
const NotAcceptableError = require("../errors/NotAcceptableError");
const Response = require("../helpers/response");

class ProductController {

  async create(req, res, next) {
    const productData = req.body;
    try {
      await productService.create(productData);
      res.json(new Response("Creation successful", 200));
    } catch (err) {
      console.log(err);
      return next(new NotAcceptableError("Creation failed"));
    }
  }

  async search(req, res, next) {

    try{

      let tag = req.query.tag;

      res.json(await productService.search(tag));

    }catch(err){

      next(err);

    }

  }

  async update(req, res, next) {
    const productId = req.params.id;
    const productData = req.body;
    try {
      await productService.update(productId, productData);
      res.json(new Response("Update successful", 200));
    } catch (err) {
      return next(err);
    }
  }

  async delete(req, res, next) {
    const productId = req.params.id;
    try {
      await productService.delete(productId);
      res.json(new Response("Delete successful", 200));
    } catch (err) {
      return next(err);
    }
  }

  async list(req, res, next) {
    try {
      let params = req.query;
      res.json(await productService.list(params));
    } catch (err) {
      console.log(err);
      return next(err);
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
      return next(err);
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
      return next(err);
    }
  }
}

module.exports = new ProductController();
