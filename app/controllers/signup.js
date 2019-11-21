const User = require("../models/users");

exports.signup = async function(req, res) {
  const user = await User.create({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.firstName,
    last_name: req.body.lastName
  });

  res.send(`User ${user.firstName} has created`);
};
