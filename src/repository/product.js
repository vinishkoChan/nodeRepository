const Product = require("../models/product");
const Op = require("sequelize").Op;
const Mark = require("../models/mark");

class ProductRepository {
  async create(product) {
    return await Product.create(product);
  }

  async change(id, productData) {
    productData.upd_date = new Date();
    productData.mark = 2.5;
    console.log(productData);
    await Product.update(productData, { where: { id: id } });
  }

  async delete(id) {
    await Product.destroy({ where: { id: id } });
  }

  async list(params) {
    let imgOnly = null;

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

  async setMark(userId, productId, markValue) {
    console.log("1");
    await Mark.create({
      user_id: userId,
      product_id: productId,
      value: markValue
    });
    console.log("2");
    let markNumber = await Mark.count({ where: { product_id: productId } });
    let markSum = await Mark.sum("value", { where: { product_id: productId } });
    let markTotalValue = (markSum / markNumber).toFixed(2);
    console.log(markSum + " / " + markNumber + " = " + markTotalValue);

    await Product.update(
      { mark: markTotalValue, upd_date: new Date() },
      { where: { id: productId } }
    );
  }
}

module.exports = new ProductRepository();
