const Sequelize = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

const DeleteRequest = sequelize.define("deletion_request", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

DeleteRequest.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

module.exports = DeleteRequest;
