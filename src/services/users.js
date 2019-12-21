const Users = require("../repository/user");

class UsersService {
  /*async create(product) {
        return await Product.create(product);
    }

    async change(id, productData) {
        return await Product.change(id, productData);
    }

    async delete(id) {
        return await Product.delete(id);
    }*/

  async list() {
    return await Users.list();
  }
}

module.exports = new UsersService();
