const users = require("../repository/users");

module.exports = async function(email, password, next) {
  const user = await users.findUser(email);
  if (!user) {
    return next(null, false, "Wrong email or paswword");
  }
  if (user.password !== password) {
    return next(null, false, "Wrong email or paswword");
  }
  return next(null, user);
};
