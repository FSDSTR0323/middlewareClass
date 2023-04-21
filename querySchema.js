const Joi = require("joi");

const restParamsSchema = Joi.object()
    .keys({
        id: Joi.string().min(6).required(),
    });


module.exports = { restParamsSchema }