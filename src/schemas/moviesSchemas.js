import Joi from "joi";

export const movieCreateSchema = Joi.object({
  id: Joi.number().optional(),
  title: Joi.string().required(),
  author: Joi.string().required(),
});

export const movieDeleteSchema = Joi.object({
  id: Joi.number().required(),
});
