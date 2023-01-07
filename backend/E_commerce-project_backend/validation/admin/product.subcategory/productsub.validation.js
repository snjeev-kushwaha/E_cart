const joi = require("joi")

const schema = joi.object({
    category_id: joi.number().integer().required(),
    sub_category_id: joi.number().integer().min(1).max(1000).required(),
    sub_category_name: joi.string().min(1).max(256).required()
})
const validate = async (req,res,next) =>{
    console.log(req.body, 'validate')
    const value = await schema.validate(req.body)
    
    if(value.error){
        res.send({error: value.error.details[0]})
    }else{
        next();
    }
}
module.exports = {validate}