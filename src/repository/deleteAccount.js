const DeleteRequest = require("../models/deleteRequest");

class DeleteAccountRep {
  async findRequest(user_id) {
    console.log(user_id);
    return await DeleteRequest.findOne({ where: { user_id: user_id } });
  }

  async create(id) {
    console.log(id);
    await DeleteRequest.create({ user_id: id });
    return;
  }
}

module.exports = new DeleteAccountRep();
