const Sequelize = require("sequelize");
const sequelize = require("../database");

const Role = sequelize.define("roles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Role;
