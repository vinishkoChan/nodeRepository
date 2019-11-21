const Product = require("../models/products");

const product = await Product.create({
  name: req.body.name,
  price: req.body.price,
  updDate: new Date(),
  description: req.body.description,
  image: req.body.image,
  amount: req.body.amount,
  mark: req.body.mark
});
