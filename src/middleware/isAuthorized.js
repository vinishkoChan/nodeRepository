const NotAuthorizedError = require("../errors/NotAuthorizedError");

module.exports = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    return next(new NotAuthorizedError("Not Authorized Error"));
  }
};
