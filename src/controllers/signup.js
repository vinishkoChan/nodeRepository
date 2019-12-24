const authService = require("../services/auth");
const creationError = require("../errors/CreationError");

class SignUpController {
  async signup(req, res, next) {
    const userData = req.body;
    try {
      await authService.signUp(userData);
    } catch (err) {
      return next(new creationError("Registration failed"));
    }
    res.send("200 OK");
  }
}

module.exports = new SignUpController();
