const Joi = require("joi");

const listingSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string(),
    price: Joi.number().required().min(0),
    country: Joi.string().required(),
    location: Joi.string().allow("", null),
}).required();


const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),  // Added parentheses here
});

module.exports = { listingSchema, reviewSchema };
