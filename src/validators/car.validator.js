import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().required(),
    price: Joi.number().min(1).max(999999).required(),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required()
})
