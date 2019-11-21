const passport = require("passport");
const users = require("../repository/users");

exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (user) {
      req.user = user;
      console.log(req.user);
      return next();
    }
    return next(info);
  })(req, res, next);
};

exports.signup = async function(req, res, next) {
  const userData = {
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  let user;
  try {
    user = await users.create(userData);
    if (user) {
      res.body = `User ${user.first_name} has created`;
      return next();
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
};
