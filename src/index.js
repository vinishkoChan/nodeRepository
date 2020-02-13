const express = require("express");
const loader = require("./loader");
const DataBase = require("./database");
const app = express();
const port = 3000;

app.use(loader);

async function start(){
    await DataBase.connect();
    app.listen(port, () => console.log(`Server started at port ${port}`));
}

start();

module.exports = app;
