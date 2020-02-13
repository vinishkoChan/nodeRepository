const requestForDelete = require("../repository/deleteRequest");
const AlreadyExistError = require("../errors/AlreadyExistError");

class requestForDeleteService {
  async create(id) {
    if (!(await requestForDelete.findRequest(id))) {
      return await requestForDelete.create(id);
    } else {
      throw new AlreadyExistError("Request already sent");
    }
  }
}

module.exports = new requestForDeleteService();
