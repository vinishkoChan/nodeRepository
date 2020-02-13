const Joi = require("joi");

const IncorrectDataError = require("../errors/IncorrectDataError");

module.exports = schema => {
  return (req, res, next) => {
    const isNotValid = Joi.validate(req.body, schema).error;

    if (isNotValid) {
      next(new IncorrectDataError(isNotValid.message));
    }

    next();
  };
};
