const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("eShop", "root", "root", config);

module.exports = sequelize;
