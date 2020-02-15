const User = require("../models/user");
const UserRole = require("./userRole");
const NotAcceptableError = require("../errors/NotAcceptableError");
const constants = require("../constants");
const bcrypt = require("bcrypt");


class UserRepository {
  findUserByEmail(email) {

    return User.findOne({ where: { email: email } });

  }

  findUserById(id) {

    return User.findOne({ where: { id: id } });

  }

  async update(id, userData){

    return User.update(userData, {where: {id: id}});

  }

  async changePassword(id, passwords){

    const user = await User.findOne({where: {id: id}});
    const oldIsCorrect = user.validatePassword(passwords.oldPassword);
    let userData = new Object();

    if(oldIsCorrect){
      userData.password = bcrypt.hashSync(passwords.newPassword, bcrypt.genSaltSync(8));
    } else {
      throw new NotAcceptableError("Incorrect old password");
    }
    return User.update(userData, {where: {id: id}});
  }

  async create(userData) {
    let user = null;
    try{
    user = await User.create(userData);
    } catch(err){
      if(err.parent.errno){
        throw new NotAcceptableError("User already exists");
      }
      throw new Error("Failed to add new user");
    }

    UserRole.create(user.id, 1);

    return user;
  }

  async list(page) {

    let result = null;
    const usersOnPage = constants.usersOnPage;

    if(page){
      result = await User.findAll({offset: page * usersOnPage - usersOnPage, limit: 2});
    }
    else {
      result = await User.findAll();
    }

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
