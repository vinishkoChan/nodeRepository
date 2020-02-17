const ProductTag = require("../models/productTag");
const Tag = require("../models/tag");
const NotAcceptableError = require("../errors/NotAcceptableError");

class ProductTagRepository {

  async create(productId, tagId) {

    await ProductTag.create({ product_id: productId, tag_id: tagId });

  }

  async read(productId, tagId){

    return ProductTag.findOne({where: {product_id: productId, tag_id: tagId}});

  }

  async listTagsIds(productId){

    return await ProductTag.findAll({where: { product_id: productId }, raw: true});

  }

  async listTagsNames(tagsIds) {

   return await Tag.findAll({where: {id: tagsIds}});

  }

  async delete(productId, tagId) {

    if(!await ProductTag.findOne({where: { product_id: productId, tag_id: tagId }})){

      throw new NotAcceptableError("Product has not this tag");

    }

    await ProductTag.destroy({where: { product_id: productId, tag_id: tagId }});

  }

}

module.exports = new ProductTagRepository();
