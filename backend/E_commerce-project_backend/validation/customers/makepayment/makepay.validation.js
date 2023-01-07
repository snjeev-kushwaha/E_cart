const joi = require("joi");

const schema = joi.object({
    invoice: joi.string().min(2).max(50).required(),
    cart_id: joi.number().integer().min(1).max(50).required(),
    transiction_id: joi.string().min(1).max(50).required(),
    date_time: joi.date().optional(),
    ammount: joi.number().integer().min(1).max(1000).required(),
    Tax: joi.number().integer().min(1).max(100).required(),
    payment_mode: joi.string().min(1).max(100).required(),
    status: joi.string().valid('pass', 'fail').optional()
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