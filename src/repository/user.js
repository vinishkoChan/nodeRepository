const User = require("../models/user");
const UserRole = require("./userRole");
const NotAcceptableError = require("../errors/NotAcceptableError");


class UserRepository {
  async findUser(email) {
    const user = await User.findOne({ where: { email: email } });

    return user;
  }

  async create(user) {
    let inst = await User.create(user);
    UserRole.create(inst.id, 1);
    return inst;
  }

  async list() {
    let result = await User.findAll();

    for (let obj of result) {
      let roles = [];
      let rolesObj = await obj.getRoles();

      rolesObj.forEach(element => {
        roles.push(element.dataValues.name);
      });
      obj.dataValues.roles = roles;
    }
    return result;
  }

  async delete(id) {
    return await User.destroy({ where: { id: id } });
  }

  async setRole(userId, roleId) {
    if (roleId == 1) {
      if (await UserRole.isLastAdmin(userId)) {
        throw new NotAcceptableError("Can't delete last admin");
      }
    }
    return UserRole.setRole(userId, roleId);
  }
}

module.exports = new UserRepository();
