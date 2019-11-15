exports.index = function(req, res) {
  res.send("Here are the Product route");
};

exports.createProduct = function(req, res) {
  res.send("New product created: " + JSON.stringify(req.body));
};
