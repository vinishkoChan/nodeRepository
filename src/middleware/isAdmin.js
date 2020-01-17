const NotAuthorizedError = require("../errors/NotAuthorizedError");

module.exports = (req, res, next) => {
  if (req.session.role == 2) {
    next();
  } else {
    next(new NotAuthorizedError("Not enough rights"));
  }
};
