const userService = require("../services/user");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");
const DeleteError = require("../errors/deleteError");
const Response = require("../helpers/response");

class UserstController {
  async delete(req, res, next) {
    const userId = req.params.id;
    try {
      await userService.delete(userId);
      res.json(new Response("Delete successful", 200));
    } catch (err) {
      console.log(err);
      return next(new DeleteError("Failed to delete user"));
    }
  }

  async list(req, res, next) {
    try {
      res.json(await userService.list());
    } catch (err) {
      console.log(err);
      return next(new DeleteError("Failed to print list of users"));
    }
  }

  async setRole(req, res, next) {
    try {
      const userId = req.params.id;
      let roleId = 1;
      if (req.query.value === "admin") {
        roleId = 2;
      }

      await userService.setRole(userId, roleId);
      res.json(new Response("Role set successful", 200));
    } catch (err) {
      console.log(err);
      return next(new UpdateError("Failed set role"));
    }
  }
}

module.exports = new UserstController();
