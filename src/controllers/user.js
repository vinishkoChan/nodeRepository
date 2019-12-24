const userService = require("../services/user");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");

class UserstController {
  async delete(req, res, next) {
    const userId = req.params.id;
    try {
      res.send(await userService.delete(userId));
    } catch (err) {
      return next(new UpdateError("Failed to delete user"));
    }
  }

  async list(req, res, next) {
    try {
      res.json(await userService.list());
    } catch (err) {
      return next(new UpdateError("Failed to print list of users"));
    }
  }
}

module.exports = new UserstController();
