const AuthorizedError = require("../errors/AuthorizedError");

module.exports = (req, res, next) => {
  if (!req.session.user) {
    return next();
  } else {
    return next(new AuthorizedError("Already Authorized Error"));
  }
};
