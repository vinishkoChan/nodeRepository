const passport = require("passport");
const Response = require("../helpers/response");
const AuthorizationError = require("../errors/AuthorizationError");

class LoginController {
  login(req, res, next) {
    try {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          req.session.user = user;
          req.session.role = user.role;

          return res.json(new Response("Authorization successful", 200));
        }
        return next(new AuthorizationError(info));
      })(req, res, next);
    } catch (err) {
      next(new AuthorizationError("Authorization failed"));
    }
  }

  logout(req, res, next) {
    req.session.user = null;
    res.json(new Response("You unauthorized", 200));
  }
}

module.exports = new LoginController();
