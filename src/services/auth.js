const User = require("../repository/user");

class UserService {
  async signUp(userData) {
    return await User.create(userData);
  }

  async login(email, password, next) {
    const user = await User.findUser(email);

    if (!user || !user.validatePassword(password)) {
      return next(null, false, "Wrong email or password");
    }

    return next(null, user);
  }
}

module.exports = new UserService();
