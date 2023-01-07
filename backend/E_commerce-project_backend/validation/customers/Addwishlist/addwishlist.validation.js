const joi = require("joi");

const schema = joi.object({
    product_id: joi.number().integer().min(1).max(256).required(),
    customer_mobile: joi.number().integer().min(1000000000).message("Contact cannot be less then 10 digist ").max(9999999999).message("Contact cannot be more than 10 digit").required(),
    quantity: joi.string().min(1).max(256).required(),
    added_on: joi.string().min(1).max(256).required(),
    price: joi.number().integer().min(1).max(100000).required()
})
const validate = async (req, res, next) => {
    const value = await schema.validate(req.body)
    if (value.error) {
        res.send({ Error: value.error.details[0] })
    } else {
        next();
    }
}
module.exports = { validate };