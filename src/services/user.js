const Users = require("../repository/user");
const DeleteRequest = require("../repository/deleteAccount");

class UsersService {
  async delete(id) {
    console.log("sadasdasds");
    if (await DeleteRequest.findRequest(id)) {
      console.log("sadasdasds");
      return await Users.delete(id);
    } else {
      throw new Error("ASDasdasdasdadasd");
    }
  }

  async list() {
    return await Users.list();
  }
}

module.exports = new UsersService();
