const joi = require("joi");

const schema = joi.object({
    category_id: joi.number().integer().min(1).max(50).required(),
    Review_point: joi.string().min(2).max(50).required(),
    massage: joi.string().min(2).max(50).required(),
    Date_time: joi.date().optional()
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