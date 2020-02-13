const requestForDelete = require("../repository/deleteRequest");

class requestForDeleteService {
  async create(id) {
    if (!(await requestForDelete.findRequest(id))) {
      return await requestForDelete.create(id);
    } else {
      throw new Error("Request already exist");
    }
  }
}

module.exports = new requestForDeleteService();
