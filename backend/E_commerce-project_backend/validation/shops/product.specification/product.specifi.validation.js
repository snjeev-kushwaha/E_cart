const joi = require("joi");

const schema = joi.object({
    product_spec: joi.string().min(1).max(1000).required(),
    product_id: joi.number().integer().min(1).max(5000).required(),
    height: joi.string().min(1).max(500).required(),
    width: joi.string().min(1).max(500).required(),
    size: joi.string().min(1).max(1000).required(),
    colour: joi.string().min(1).max(500).required(),
    price: joi.number().integer().min(1).max(1000).required(),
    mf_date: joi.date().optional(),
    exp_date: joi.date().required(),
    dimension: joi.string().min(1).max(50).required(),
    photo: joi.string().required()
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