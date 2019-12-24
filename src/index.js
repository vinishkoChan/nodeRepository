const express = require("express");
const loader = require("./loader");
const connect = require("./database/connect");
const app = express();
const port = 3000;

app.use(loader);

connect();
app.listen(port, () => console.log(`Server started at port ${port}`));

module.exports = app;