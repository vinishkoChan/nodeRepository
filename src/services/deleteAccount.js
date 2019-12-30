const DeleteAccount = require("../repository/deleteAccount");
const AlreadyExistError = require("../errors/AlreadyExistError");

class DeleteAccountService {
  async create(id) {
    if (!(await DeleteAccount.findRequest(id))) {
      return await DeleteAccount.create(id);
    } else {
      throw new AlreadyExistError("Request already sent");
    }
  }
}

module.exports = new DeleteAccountService();
