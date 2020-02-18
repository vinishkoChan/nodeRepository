const DeleteRequest = require("../models/deleteRequest");

class requestForDeleteRepository {

  async findRequest(userId) {
    return await DeleteRequest.findOne({ where: { user_id: userId } });
  }

  async create(id) {
    await DeleteRequest.create({ user_id: id });
    return;
  }

  async findAll() {
    return await DeleteRequest.findAll();
  }

}

module.exports = new requestForDeleteRepository();
