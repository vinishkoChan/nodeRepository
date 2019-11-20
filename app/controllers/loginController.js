const passport = require("passport");

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      req.user = user;
      return next();
    }
    return res.send(info);
  })(req, res, next);
};
