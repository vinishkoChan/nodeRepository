const User = require("../repository/user");
const UserRole = require("../repository/userRole");
const DeleteRequest = require("../repository/deleteAccount");

class UserService {
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
