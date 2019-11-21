const express = require("express");
const loader = require("./app/loader");

const app = express();
const port = 3000;

app.use(loader);

app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;
