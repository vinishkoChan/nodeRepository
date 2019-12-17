const passport = require("passport");
const userService = require("../services/user");

class LoginController {
  login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (user) {
        req.user = user;
        return res.send("You authorized");
      }
      return next(info);
    })(req, res, next);
  }
}

module.exports = new LoginController();
