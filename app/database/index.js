const Sequelize = require("sequelize");
const config = require("../config/sequelize");

const sequelize = new Sequelize("e_Shop_db", "root", "root", config);

sequelize
  .sync()
  .then(_ => console.log("DB connected."))
  .catch(err => console.log(err));

module.exports = sequelize;
