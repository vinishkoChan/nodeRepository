const express = require("express");
const loader = require("./loader");
const DataBase = require("./database");
const port = require("./config").app.port;
const app = express();
const cronJob = require("cron").CronJob;
const service = require("../src/services/user");

app.use(loader);

async function start(){
    await DataBase.connect();
    app.listen(port, () => console.log(`Server started at port ${port}`));
    new cronJob('* */5 * * * *', service.automaticDelete).start();
}

start();

module.exports = app;
