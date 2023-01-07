const joi = require("joi");

const schema = joi.object({
    ship_id: joi.number().integer().min(1).max(500).required(),
    invoice: joi.string().min(1).required(),
    customer_mobile: joi.number().integer().min(1000000000).message("Contact cannot be less then 10 digist ").max(9999999999).message("Contact cannot be more than 10 digit").required(),
    shipping_date: joi.date().required(),
    delivery_date: joi.date().required(),
    status: joi.string().valid('process','delhi','indore','bhopal').optional(),
    // delivery_date: joi.date().timestamp().optional(),
    status: joi.string().min(2).max(50).required()
})

const validate = async (req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({error: value.error.details[0]})
    }else{
        next();
    }
}

module.exports = {validate}