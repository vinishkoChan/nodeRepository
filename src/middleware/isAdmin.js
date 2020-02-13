const NotAuthorizedError = require("../errors/NotAuthorizedError");
const constants = require("../constants");

module.exports = (req, res, next) => {
  if (req.session.role == constants.adminRole) {
    next();
  } else {
    next(new NotAuthorizedError("Not enough rights"));
  }
};
