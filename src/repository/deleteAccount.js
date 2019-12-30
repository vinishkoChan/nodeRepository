const DeleteRequest = require("../models/deleteRequest");

class DeleteAccountRepository {
  async findRequest(userId) {
    return await DeleteRequest.findOne({ where: { user_id: userId } });
  }

  async create(id) {
    await DeleteRequest.create({ user_id: id });
    return;
  }
}

module.exports = new DeleteAccountRepository();
