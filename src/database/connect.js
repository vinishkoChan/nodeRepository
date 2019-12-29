const sequelize = require("./");
require("../models");

module.exports = () => {
  sequelize
    .sync()
    .then(_ => console.log("DB connected."))
    .catch();
};
