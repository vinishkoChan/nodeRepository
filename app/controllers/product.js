const Product = require("../models/products");

exports.index = function(req, res) {
  res.send("Here is the Product route");
};

exports.createProduct = async function(req, res) {
  console.log(req.body);
  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    updDate: new Date(),
    description: req.body.description,
    image: req.body.image,
    amount: req.body.amount,
    mark: req.body.mark
  });
  res.send(product);
};
