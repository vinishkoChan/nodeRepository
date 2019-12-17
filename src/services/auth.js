const users = require("../repository/user");

module.exports = async function(email, password, next) {
  const user = await users.findUser(email);
  if (!user || user.password !== password) {
    return next(null, false, "Wrong email or password");
  }
  return next(null, user);
};
