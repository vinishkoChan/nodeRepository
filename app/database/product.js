const Sequelize = require("sequelize");
const sequelize = require("./index");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    default: `#product`
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  updDate: {
    type: Sequelize.DATE,
    allowNull: false
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
    type: Sequelize.TINYINT
  }
});

module.exports = Product;
