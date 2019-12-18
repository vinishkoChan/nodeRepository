module.exports = (error, req, res, next) => {
  res.status(error.status).send(error.message);
};
