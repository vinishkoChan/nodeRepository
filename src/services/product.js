const Product = require("../repository/product");
const Mark = require("../repository/mark");
const markService = require("./mark");
const Tag = require("../repository/tag");
const ProductTag = require("../repository/productTag");

class ProductService {
  
  async create(product) {

    return await Product.create(product);

  }

  read(productId) {

    return Product.read(productId);

  }

  searchByTag(tagName){

    return Tag.searchProductByTag(tagName);

  }

  async addTag(productId, tagName) {

    let tag = await Tag.readByName(tagName);

    if(!tag){

      tag = await Tag.create(tagName);

    }

    if(await ProductTag.read(productId, tag.id)){

      throw new NotAcceptableError("Product already has this tag")

    }

    return ProductTag.create(productId, tag.id);

  }

  deleteTag(productId, tagName) {

    const tag = Tag.readByName(tagName);

    if(!tag) {

      throw new NotAcceptableError("Tag doesn't exists");

    }

    return ProductTag.delete(productId, tag.id);

  }

  async listTags(productId) {

    const product = await Product.read(productId);

    return product.getTags();

  }

  async update(id, productData) {

    return await Product.update(id, productData);

  }

  async delete(id) {

    return await Product.delete(id);

  }

  async list(params) {

    const products = await Product.list(params);

    for (let prod of products) {

      prod["Amount of marks"] = await Mark.countMarks(prod.id);

    }

    return products;

  }

  async setMark(userId, productId, markValue) {

    if (await Mark.find(userId, productId)) {

      await Mark.update(userId, productId, markValue);

    } else {

      await Mark.create(userId, productId, markValue);

    }

    return await Product.update(
      productId,

      {
        mark: await markService.calculateTotalMark(productId)
      }
    );

  }

  async deleteMark(userId, productId) {

    await Mark.delete(userId, productId);

    await Product.update(
      productId,

      {
        mark: await markService.calculateTotalMark(productId)
      }
    );

  }
}

module.exports = new ProductService();
