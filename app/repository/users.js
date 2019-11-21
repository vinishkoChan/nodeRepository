const User = require("../models/users");

exports.findUser = async function(email) {
  const user = await User.findOne({ where: { email: email } });
  return user;
};

exports.create = async function(user) {
  return await User.create(user);
};
