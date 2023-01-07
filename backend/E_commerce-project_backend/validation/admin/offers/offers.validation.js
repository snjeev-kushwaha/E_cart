const joi = require("joi")

const schema = joi.object({
    offer_id: joi.number().integer().min(1).max(15000).required(),
    coupan_code: joi.string().min(1).max(1500).required(),
    From_date: joi.date().required(),
    to_date: joi.date().required(),
    discountPersentage: joi.number().integer().min(1).max(256).required(),
    flat_discount: joi.number().integer().min(1).max(256).required(),
    valid_in: joi.string().min(1).max(256).required(),
    additional_offers: joi.string().min(1).max(256).required()
})
const validate = async(req,res,next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
            res.send({error:value.error.details[0]})
    }else{
        next();
    }
}
module.exports = {validate}