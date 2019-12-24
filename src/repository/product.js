const Product = require("../models/product");
const Op = require("sequelize").Op;
const Mark = require("../models/mark");

class ProductRepository {
  async create(product) {
    return await Product.create(product);
  }

  async change(id, productData) {
    productData.upd_date = new Date();
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
    let markNumber = 6; //await Mark.count({ where: { product_id: product_id } });
    console.log(markNumber);
    let markSum = 14; //await Mark.sum("mark", { where: { product_id: product_id } });
    console.log(markSum);
    let markTotalValue = markSum / markNumber;

    console.log(markTotalValue);
    let obj = new Object();
    obj.mark = markTotalValue;
    obj.upd_date = new Date();
    console.log(obj);
    return await Product.update(obj, { where: { id: product_id } });
  }
}

module.exports = new ProductRepository();
