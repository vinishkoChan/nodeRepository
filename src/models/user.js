const Sequelize = require("sequelize");
const sequelize = require("../database");
const Mark = require("./mark");
const bcrypt = require("bcrypt");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.beforeCreate((user, opts) => {
  user.password = User.hashPassword(user.password);
});

User.hashPassword = password => {
  console.log(password);
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.prototype.validatePassword = password => {
  if (!password || !this.password) {
    return false;
  }
  return bcrypt.compareSync(password, this.password);
};

User.hasMany(Mark);
module.exports = User;
