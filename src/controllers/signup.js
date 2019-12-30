const authService = require("../services/auth");
const creationError = require("../errors/CreationError");
const Response = require("../helpers/response");

class SignUpController {
  async signup(req, res, next) {
    const userData = req.body;
    try {
      await authService.signUp(userData);
      res.json(new Response("Registration successful", 200));
    } catch (err) {
      console.log(err);
      return next(new creationError("Registration failed"));
    }
  }
}

module.exports = new SignUpController();
