exports.validReg = function(err, req, res, next) {
  if (err.parent) {
    if (err.parent.errno == 1062) {
      res.body = "DUPLICATE email";
    }
  }
  res.body = "Unknown error";
  return next();
};
