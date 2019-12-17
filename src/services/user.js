const User = require("../repository/user");

class UserService {
  async create(userData) {
    return await User.create(userData);
  }
}

module.exports = new UserService();
