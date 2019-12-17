const Product = require("../repository/product");

class ProductService {
  async create(product) {
    return await Product.create(product);
  }

  async change(id, productData) {
    return await Product.change(id, productData);
  }

  async delete(id) {
    return await Product.delete(id);
  }

  async list() {
    return await Product.list();
  }
}

module.exports = new ProductService();
