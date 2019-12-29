const express = require("express");
const loader = require("./loader");
const DataBase = require("./database");
const app = express();
const port = 3000;

app.use(loader);

DataBase.connect();
app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;
