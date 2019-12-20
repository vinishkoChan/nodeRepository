const NotAuthorizedError = require("../errors/NotAutgorizedError");

module.exports = (req, res, next) => {
  if (req.session.user_id) {
    return next();
  } else {
    return next(new NotAuthorizedError("Not Authorized Error"));
  }
};
