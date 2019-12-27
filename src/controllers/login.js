const passport = require("passport");
const UpdateError = require("../errors/UpdateError");

class LoginController {
  login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (user) {
        req.session.user = user;
        return res.send("You authorized");
      }
      return next(new UpdateError("Authorizayion failed"));
    })(req, res, next);
  }
}

module.exports = new LoginController();
