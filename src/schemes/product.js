const Joi = require("joi");

class ProductScheme {
  constructor() {
    this.create = Joi.object().keys({
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(50)
        .required(),
      price: Joi.number()
        .positive()
        .required(),
      upd_date: Joi.forbidden(),
      description: Joi.string(),
      image: Joi.string().max(255),
      amount: Joi.number()
        .integer()
        .positive(),
      mark: Joi.forbidden()
    });

    this.update = Joi.object().keys({
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(50),
      price: Joi.number().positive(),
      upd_date: Joi.forbidden(),
      description: Joi.string(),
      image: Joi.string().max(255),
      amount: Joi.number()
        .integer()
        .positive(),
      mark: Joi.forbidden()
    });
  }
}

module.exports = new ProductScheme();
