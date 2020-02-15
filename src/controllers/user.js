const userService = require("../services/user");
const Response = require("../helpers/response");
const constants = require("../constants");


class UserController {
  async delete(req, res, next) {
    const userId = req.params.id;

    try {
      if (req.session.user.id == userId) {
        throw new Error();
      }
      await userService.delete(userId);
      res.json(new Response("Delete successful", 200));
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async list(req, res, next) {
    try {
      let page = null;
      if(req.query.page) {
        page = req.query.page;
      }
      res.json(await userService.list(page));
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }

  async setRole(req, res, next) {
    try {
      const userId = req.params.id;
      let roleId = constants.userRoleNum;
      if (req.query.value === constants.adminRoleText) {
        roleId = constants.adminRoleNum;
      }else if(req.query.value === constants.userRoleText){
        roleId = constants.userRoleNum;
      }

      await userService.setRole(userId, roleId);
      res.json(new Response("Role set successful", 200));
    } catch (err) {
      console.log(err);
      return next(err);
    }
  }
}

module.exports = new UserController();
