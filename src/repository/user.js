const User = require("../models/user");

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

  async delete(id) {
    return await User.destroy({ where: { id: id } });
  }
}

module.exports = new UserRep();
