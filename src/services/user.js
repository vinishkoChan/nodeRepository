const User = require("../repository/user");
const DeleteRequest = require("../repository/deleteAccount");

class UserService {
  async addUser(userData, role) {
    return await User.create(userData, role);
  }

  async findUserByEmail(email) {
    return await User.findUser(email);
  }

  async delete(id) {
    if (await DeleteRequest.findRequest(id)) {
      return await User.delete(id);
    } else {
      throw new Error("ASDasdasdasdadasd");
    }
  }

  async list() {
    return await User.list();
  }

  async setRole(userId, roleId) {
    return User.setRole(userId, roleId);
  }
}

module.exports = new UserService();
