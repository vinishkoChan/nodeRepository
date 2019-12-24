const Sequelize = require("sequelize");
const sequelize = require("../database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  upd_date: {
    type: Sequelize.DATE
  },
  description: {
    type: Sequelize.TEXT
  },
  image: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mark: {
    type: Sequelize.DECIMAL
  }
});

Product.beforeCreate((product, options) => {
  product.upd_date = new Date();
});

module.exports = Product;
