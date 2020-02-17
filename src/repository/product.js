const Product = require("../models/product");
const sequelize = require("sequelize");
const Mark = require("./mark");
const NotAcceptableError = require("../errors/NotAcceptableError");

const Op = sequelize.Op;

class ProductRepository {

  async create(product) {
    return await Product.create(product);
  }

  async read(id){

    if(!await Product.findByPk(id)){
      throw new NotAcceptableError("Product doesn't exists");
    }

    return await Product.findByPk(id);
    
  }

  async update(id, productData) {

    productData.update_date = new Date();
    
    return await Product.update(productData, { where: { id: id } });
  }

  async delete(id) {  
    if(!await Product.findOne({ where: { id: id } })){
      throw new NotAcceptableError("Product doesn't exists");
    }
    await Product.destroy({ where: { id: id } });
  }

  async list(params) {
    let where = {};
    let orderBy = [["id", "ASC"]]

    if (params.imgOnly) {
      where.image = { [Op.ne]: null };
    }
    if (params.orderBy) {
      orderBy = [[params.orderBy, "ASC"]];
    }

    let result = await Product.findAll({
      where,
      order: [
          sequelize.fn('isnull', sequelize.col('amount')),
          orderBy
      ],
      raw: true
    });

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
