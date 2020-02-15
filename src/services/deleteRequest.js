const requestForDelete = require("../repository/deleteRequest");
const NotAcceptableError = require("../errors/NotAcceptableError");

class requestForDeleteService {
  async create(id) {
    if (!(await requestForDelete.findRequest(id))) {
      return await requestForDelete.create(id);
    } else {
      throw new NotAcceptableError("Request already exist");
    }
  }
}

module.exports = new requestForDeleteService();
