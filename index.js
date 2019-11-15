const express = require("express");
const app = express();
const productRouter = require("./app/routes/productRouter");

app.use("/product", productRouter);

app.listen(3000);
