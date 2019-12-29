const passport = require("passport");
const UpdateError = require("../errors/UpdateError");

class LoginController {
  login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      if (user) {
        req.session.user = user;
        req.session.role = user.role;

        return res.send("You authorized");
      }
      return next(new UpdateError("Authorization failed"));
    })(req, res, next);
  }

  logout(req, res, next) {
    req.session.user = null;
    res.send("You unauthorized");
  }
}

module.exports = new LoginController();
