const User = require("../models/user");
const UserRole = require("./userRole");

class UserRepository {
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

  async setRole(userId, roleId) {
    if (roleId == 1) {
      if (await UserRole.isLastAdmin(userId)) {
        console.log("Oh, hi, Mark");
        throw new Error("asdasdasd");
      }
    }
    return UserRole.setRole(userId, roleId);
  }
}

module.exports = new UserRepository();
