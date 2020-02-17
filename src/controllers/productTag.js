const productTagService = require("../services/productTag");
const NotAcceptableError = require("../errors/NotAcceptableError");
const Response = require("../helpers/response");

class ProductController {

  async create(req, res, next) {

    const productId = req.params.productId;
    const tagName = req.query.tagName;

    try {

      await productTagService.create(productId, tagName);
      res.json(new Response("Creation successful", 200));

    } catch (err) {
      console.log(err);
      return next(new NotAcceptableError("Creation failed"));
    }
  }

  async delete(req, res, next) {

    const productId = req.params.productId,
    tagId = req.params.tagId;

    try {

      await productTagService.delete(productId, tagId);
      res.json(new Response("Delete successful", 200));

    } catch (err) {
      return next(err);
    }
  }

  async list(req, res, next) {

    try {

      let productId = req.params.productId;
      res.json(await productTagService.list(productId));
      
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }
}

module.exports = new ProductController();
