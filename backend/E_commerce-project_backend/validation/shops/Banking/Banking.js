const joi = require("joi");

const schema = joi.object({
    account_no: joi.string().min(1).max(10000).required(),
    bank_name: joi.string().min(1).max(1000).required(),
    ifsc: joi.string().min(2).max(1000).required(),
    address: joi.string().min(2).max(1000).required(),
    bank_holder: joi.string().min(2).max(1000).required(),
    phone_number: joi.number().integer().min(1000000000).message("Contact cannot be less then 10 digist ").max(9999999999).message("Contact cannot be more than 10 digit").required()
})

const validate = async (req, res, next) =>{
    const value = await schema.validate(req.body);
    if(value.error){
        res.send({error: value.error.details[0]});
    }
    next();
}
module.exports = validate;