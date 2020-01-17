const Product = require("../models/product");
const Op = require("sequelize").Op;
const Mark = require("./mark");

class ProductRepository {
  async create(product) {
    return await Product.create(product);
  }

  async update(id, productData) {
    productData.update_date = new Date();
    console.log(productData);
    await Product.update(productData, { where: { id: id } });
  }

  async delete(id) {
    await Product.destroy({ where: { id: id } });
  }

  async list(params) {
    let object = new Object();
    object.where = {};
    object.raw = true;
    if (params.imgOnly) {
      object.where.image = { [Op.ne]: null };
    }
    if (params.orderBy) {
      object.order = [[params.orderBy, "ASC"]];
    }

    object.where.amount = { [Op.ne]: null };
    let noNulls = await Product.findAll(object);

    object.where.amount = null;
    let withNulls = await Product.findAll(object);

    let result = noNulls.concat(withNulls);

    for (let obj of result) {
      obj["Amount of marks"] = await Mark.countMarks(obj.id);
    }

    return result;
  }

  async setMark(userId, productId, markValue) {
    if (await Mark.find(userId, productId)) {
      await Mark.update(userId, productId, markValue);
    } else {
      await Mark.create(userId, productId, markValue);
    }
    await Product.update(
      {
        mark: await Mark.calculateTotalMark(productId),
        update_date: new Date()
      },
      { where: { id: productId } }
    );
  }

  async deleteMark(userId, productId) {
    await Mark.delete(userId, productId);

    await Product.update(
      {
        mark: await Mark.calculateTotalMark(productId),
        update_date: new Date()
      },
      { where: { id: productId } }
    );
  }
}

module.exports = new ProductRepository();
