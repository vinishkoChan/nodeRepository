const express = require("express");
const app = express();

const productRouter = require("../controllers/product");

app.use("/product", productRouter);

app.listen(3000);
