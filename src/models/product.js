const Sequelize = require("sequelize");
const sequelize = require("../database");
const Mark = require("./mark");

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
    type: Sequelize.INTEGER
  },
  mark: {
    type: Sequelize.FLOAT
  }
});

Product.beforeCreate((product, options) => {
  product.upd_date = new Date();
});

Product.hasMany(Mark, { foreignKey: "product_id" });

module.exports = Product;
