const Response = require("../helpers/response");

module.exports = (error, req, res, next) => {
  res.status(error.status || 500).json(new Response(error.message, error.status || 500));
};
