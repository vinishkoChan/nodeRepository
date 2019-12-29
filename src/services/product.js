const Product = require("../repository/product");

class ProductService {
  async create(product) {
    return await Product.create(product);
  }

  async update(id, productData) {
    return await Product.update(id, productData);
  }

  async delete(id) {
    return await Product.delete(id);
  }

  async list(params) {
    return await Product.list(params);
  }

  async setMark(userId, productId, markValue) {
    return await Product.setMark(userId, productId, markValue);
  }

  async deleteMark(userId, productId) {
    return await Product.deleteMark(userId, productId);
  }
}

module.exports = new ProductService();
