const Joi = require("joi");

const IncorrectDataError = require("../errors/IncorrectDataError");

module.exports = shema => {
  return (req, res, next) => {
    const isNotValid = Joi.validate(req.body, shema).error;

    if (isNotValid) {
      next(new IncorrectDataError(isNotValid.message));
    }

    next();
  };
};
