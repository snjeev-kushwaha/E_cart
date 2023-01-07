const joi = require("joi");

const schema = joi.object({
    product_id: joi.number().integer().min(1).max(5000).required(),
    category_id: joi.number().integer().min(1).max(5000).required(),
    sub_category_id: joi.number().integer().min(1).max(1000).required(),
    product_name: joi.string().min(2).max(5000).required(),
    product_company: joi.string().min(1).max(1000).required(),
    mf_date: joi.date().required(),
    ex_date: joi.date().required(),
    shop_id: joi.number().integer().min(1).max(100000).required(),
    quantity: joi.string().min(1).max(1000).required(),
    description: joi.string().min(1).max(500).required()
})
const validate = async (req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({error: value.error.details[0]})
    }else{
        next()
    }
}
module.exports = {validate}