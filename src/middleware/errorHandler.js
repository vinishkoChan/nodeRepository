module.exports = (error, req, res, next) => {
  //res.status(error.status);
  res.send(error.message);
};
