import Joi from "joi";

export const movieSchema = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().required(),
    author: Joi.string().required()

})