const Joi = require("joi");

class UserScheme {
  constructor() {
    this.create = Joi.object().keys({
      email: Joi.string()
        .email()
        .max(50)
        .required(),
      password: Joi.string()
        .min(4)
        .max(20)
        .required(),
      first_name: Joi.string()
        .max(50)
        .required(),
      last_name: Joi.string()
        .max(50)
        .required()
    });

    this.login = Joi.object().keys({
      email: Joi.string()
        .email()
        .min(1)
        .required(),
      password: Joi.string()
        .min(4)
        .max(20)
        .required()
    });
  }
}

module.exports = new UserScheme();
