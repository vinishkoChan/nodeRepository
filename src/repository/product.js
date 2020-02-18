const Product = require("../models/product");
const sequelize = require("sequelize");
const Mark = require("./mark");
const Tag = require("./tag");
const constants = require("../constants");
const NotAcceptableError = require("../errors/NotAcceptableError");
const fs = require('fs');

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

  async search(tagName){

    const tag = await Tag.readByTagName(tagName);

    return tag.getProducts();

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

    const productsOnPage = constants.productsOnPage;
    let offset = null, limit = null;
    let where = {};
    let orderBy = [["id", "ASC"]]

    if (params.imgOnly) {

      where.image = { [Op.ne]: null };

    }

    if (params.orderBy) {

      orderBy = [[params.orderBy, "ASC"]];

    }

    if(params.page){

      let page = params.page;

      offset = page * productsOnPage - productsOnPage;
      limit =  productsOnPage;

    }

    let result = await Product.findAll({
      where,
      order: [
          sequelize.fn('isnull', sequelize.col('amount')),
          orderBy
      ],
      raw: true,
      offset: offset,
      limit: limit
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
