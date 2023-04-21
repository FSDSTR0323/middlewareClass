const Joi = require("joi");


const querySchema = Joi.object()
    .keys({
        id: Joi.string().min(1).max(1).required(),
    });

const userSchema = Joi.object()
    .keys({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        age: Joi.number().min(5).max(10)
    });

// const itemSchema = Joi.object()
//     .keys({
//         id: Joi.string().required(),
//         name: Joi.string().required(),
//         quantity: Joi.number().min(5).max(10),
//         color: Joi.string()
//     });

// const itemSchemaForPut = Joi.object()
//     .keys({
//         id: Joi.string(),
//         name: Joi.string(),
//         quantity: Joi.number().min(5).max(10),
//         color: Joi.string(),
//         owner: Joi.string().min(5)

//     });

module.exports = { userSchema, querySchema }