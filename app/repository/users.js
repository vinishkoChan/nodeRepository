const User = require("../models/users");

module.exports.findUser = async function(email) {
  console.log(email);
  const user = await User.findOne({ where: { email: email } });
  return user;
};
