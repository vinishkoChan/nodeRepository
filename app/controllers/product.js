exports.index = function(req, res) {
  if (!req.session.counter) {
    req.session.counter = 1;
    return res.send("You're here for the first time");
  } else req.session.counter++;
  return res.send(`Views = ${req.session.counter}`);
};

exports.createProduct = async function(req, res) {
  res.send(product);
};
