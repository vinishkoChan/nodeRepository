const Sequelize = require("sequelize");
const sequelize = require("../database");
const Product = require("./product");

const Mark = sequelize.define("marks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  value: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Mark.belongsTo(Product, { foreignKey: "id", onDelete: "CASCADE" });
module.exports = Mark;
