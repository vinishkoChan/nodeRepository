const userService = require("../services/user");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");

class UserstController {
  async delete(req, res, next) {
    const userId = req.params.id;
    try {
      res.send(await userService.delete(userId));
    } catch (err) {
      console.log(err);
      return next(new UpdateError("Failed to delete user"));
    }
  }

  async list(req, res, next) {
    try {
      res.json(await userService.list());
    } catch (err) {
      console.log(err);
      return next(new UpdateError("Failed to print list of users"));
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
      res.send("Role set successful");
    } catch (err) {
      console.log(err);
      return next(new UpdateError("Failed set role"));
    }
  }
}

module.exports = new UserstController();
