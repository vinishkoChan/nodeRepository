const DeleteAccount = require("../repository/deleteAccount");

class DeleteAccountService {
  async create(id) {
    if (!(await DeleteAccount.findRequest(id))) {
      return await DeleteAccount.create(id);
    } else {
      return next(err);
    }
  }
}

module.exports = new DeleteAccountService();
