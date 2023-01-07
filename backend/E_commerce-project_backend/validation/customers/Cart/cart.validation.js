const joi = require("joi");

const schema = joi.object({
    cart_id: joi.number().integer().min(1).max(255).required(),
    customer_id: joi.number().integer().min(1).max(255).required(),
    product_id: joi.number().integer().min(1).max(255).required(),
    customer_mobile: joi.number().integer().min(1000000000).message("Contact cannot be less then 10 digist ").max(9999999999).message("Contact cannot be more than 10 digit").required(),
    quantity: joi.string().min(1).max(255).required(),
    price: joi.number().min(1).max(10000).required(),
    addedon: joi.string().min(1).max(255).required(),
    payment_status: joi.string().min(1).max(255).required()
})
const validate = async (req, res, next) => {
    const value = await schema.validate(req.body)
    if (value.error) {
        res.send({ error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { validate }