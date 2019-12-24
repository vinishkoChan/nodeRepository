const DeleteAccountService = require("../services/deleteAccount");
const CreationError = require("../errors/CreationError");
const UpdateError = require("../errors/UpdateError");

class DeleteAccountController {
  async create(req, res, next) {
    try {
      await DeleteAccountService.create(req.session.user.id);
      res.json("Request created");
    } catch (err) {
      return next(new CreationError("Request Creation Error"));
    }
  }
}

module.exports = new DeleteAccountController();
