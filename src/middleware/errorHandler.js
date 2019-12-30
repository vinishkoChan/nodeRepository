const Response = require("../helpers/response");

module.exports = (error, req, res, next) => {
  res.json(new Response(error.message, error.status || 500));
};
