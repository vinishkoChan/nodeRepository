const DeleteAccountService = require("../services/deleteAccount");
const Response = require("../helpers/response");

class DeleteAccountController {
  async create(req, res, next) {
    try {
      await DeleteAccountService.create(req.session.user.id);
      res.json(new Response("Request created"));
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new DeleteAccountController();
