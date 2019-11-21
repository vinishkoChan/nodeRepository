const passport = require("passport");

exports.login = (req, res) => {
  res.send(`Welcome, ${req.user.first_name}`);
};
