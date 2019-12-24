const passport = require("passport");

class LoginController {
  login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (user) {
        req.session.user = user;
        return res.send("You authorized");
      }
      return next(info);
    })(req, res, next);
  }
}

module.exports = new LoginController();
