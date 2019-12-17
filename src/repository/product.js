const Product = require("../models/products");

class ProductRep {
  async create(product) {
    return await Product.create(product);
  }

  async change(id, productData) {
    await Product.update(productData, { where: { id: id } });
  }

  async delete(id) {
    await Product.destroy({ where: { id: id } });
  }

  async list() {
    return await Product.findAll({ raw: true });
  }
}

module.exports = new ProductRep();
