const sequelize = require("./");

module.exports = () => {
  sequelize
    .sync()
    .then(_ => console.log("DB connected."))
    .catch();
};
