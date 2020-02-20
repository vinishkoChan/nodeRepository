const Response = require("../helpers/response");
const errorStorer = require("../helpers/errorStorer");

module.exports = (error, req, res, next) => {

  error.route = req._parsedOriginalUrl.path;

  errorStorer.store(error);

  res.status(error.status || 500).json(new Response(error.message, error.status || 500));

};
