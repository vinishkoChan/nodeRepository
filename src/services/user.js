const User = require("../repository/user");
const NotAcceptableError = require("../errors/NotAcceptableError");
const DeleteRequest = require("../repository/deleteRequest");

class UserService {
  async addUser(userData, role) {
    return await User.create(userData, role);
  }

  update(id, userData) {
    return User.update(id, userData);
  }

  changePassword(id, passwords){
    return User.changePassword(id, passwords);
  }

  async findUserByEmail(email) {
    return await User.findUser(email);
  }

  async delete(id) {
    if (await DeleteRequest.findRequest(id)) {
      return await User.delete(id);
    } else {
      throw new NotAcceptableError("Request doesn't exists");
    }
  }

  async list(page) {
    return await User.list(page);
  }

  async setRole(userId, roleId) {
    return User.setRole(userId, roleId);
  }
}

module.exports = new UserService();
