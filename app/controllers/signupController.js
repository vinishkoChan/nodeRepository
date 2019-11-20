const User = require("../database/user");

exports.signup = async function(req, res) {
  const user = await User.create({
    email: req.body.email,
    pass: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  res.send(`User ${user.firstName} has created`);
};
