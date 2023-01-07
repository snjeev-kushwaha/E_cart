const joi = require("joi");

const schema = joi.object({
    customer_mobile: joi.number().integer().min(1000000000).message("Contact cannot be less then 10 digist ").max(9999999999).message("Contact cannot be more than 10 digit").required(),
    email: joi.string().min(2).max(256).required(),
    Name: joi.string().min(2).max(256).required(),
    gender: joi.string().min(1).max(10).required(),
    address: joi.string().min(2).max(256).required(),
    state: joi.string().min(2).max(256).required(),
    city: joi.string().min(2).max(256).required(),
    pin: joi.number().integer().min(100000).message("Pincode cannot be less then 6 digit").max(999999).message("pincode cannot be more then 6 digit").required(),
    password: joi.number().integer().min(2).max(256).required()
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