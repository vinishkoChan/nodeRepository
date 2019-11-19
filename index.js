const express = require("express");
const passport = require("passport");
const bodyParser = require("body-parser");
const env = require("dotenv");
const app = express();

const port = 3000;

const productRouter = require("./app/routes/productRouter");
const loginRouter = require("./app/routes/loginRouter");
const signupRouter = require("./app/routes/signupRouter");

app.use(bodyParser.json());
app.use(passport.initialize());

require("./app/config/passport")(passport);

app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/product", productRouter);

app.listen(port, () => console.log(`Server started at port ${port}`));
