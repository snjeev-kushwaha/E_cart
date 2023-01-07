const joi = require("joi");

const schema = joi.object({
    employee_id: joi.number().integer().min(1).max(10000).required(),
    shop_id: joi.string().min(1).max(10000).required(),
    fullname: joi.string().min(2).max(1000).required(),
    role: joi.string().min(2).max(1000).required()
})

const validate = async (req, res, next) =>{
    const value = await schema.validate(req.body);
    if(value.error){
        res.send({error: value.error.details[0]});
    }
    next();
}
module.exports = validate;