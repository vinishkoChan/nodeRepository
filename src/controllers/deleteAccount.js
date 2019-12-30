const DeleteAccountService = require("../services/deleteAccount");

class DeleteAccountController {
  async create(req, res, next) {
    try {
      await DeleteAccountService.create(req.session.user.id);
      res.json("Request created");
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new DeleteAccountController();
