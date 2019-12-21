const User = require("../models/users");

class UserRep {
  async findUser(email) {
    const user = await User.findOne({ where: { email: email } });
    return user;
  }

  async create(user) {
    return await User.create(user);
  }

  async list() {
    return await User.findAll();
  }
}

module.exports = new UserRep();
