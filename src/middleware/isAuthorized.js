const NotAuthorizedError = require("../errors/NotAutgorizedError");

module.exports = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    return next(new NotAuthorizedError("Not Authorized Error"));
  }
};
