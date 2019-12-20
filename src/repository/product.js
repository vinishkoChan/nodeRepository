const Product = require("../models/products");
const Op = require("sequelize").Op;

class ProductRep {
  async create(product) {
    return await Product.create(product);
  }

  async change(id, productData) {
    productData.upd_date = new Date();
    await Product.update(productData, { where: { id: id } });
  }

  async delete(id) {
    await Product.destroy({ where: { id: id } });
  }

  async list(params) {
    let imgOnly = null;
    console.log(params);
    if (params.imgOnly) {
      imgOnly = { image: { [Op.ne]: null } };
    }
    if (params.orderBy) {
      let result = await Product.findAll({
        order: [[params.orderBy, "ASC"]],
        where: imgOnly,
        raw: true
      });
      imgOnly = null;
      return result;
    }

    return await Product.findAll({ raw: true });
  }
}

module.exports = new ProductRep();
