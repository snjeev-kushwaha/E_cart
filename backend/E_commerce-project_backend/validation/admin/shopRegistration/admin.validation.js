const joi = require("joi");

const schema = joi.object({
     Reg_no: joi.string().min(1).max(256).required(),
     shop_id: joi.string().min(1).max(256).required(),
     shop_name: joi.string().min(2).max(256).required(),
     address: joi.string().min(2).max(256).required(),
     state: joi.string().min(1).max(50).required(),
     city: joi.string().min(1).max(50).required(),
     pincode: joi.number().integer().min(100000).message("Pincode cannot be less then 6 digit").max(999999).message("pincode cannot be more then 6 digit").required(),
     contact: joi.number().integer().min(1000000000).message("Contact cannot be less then 10 digist ").max(9999999999).message("Contact cannot be more than 10 digit").required(),
     owner: joi.string().min(1).max(50).required(),
     type: joi.string().min(2).max(100).required(),
//    "electronics", "stationary", "footware", "grocery","general store"
     email: joi.string().min(1).max(50).required(),
     url: joi.string().min(1).max(50).required(),
     gst: joi.string().min(1).max(100).required(),
     turnover: joi.number().integer().min(1).max(50000).required(),
     description: joi.string().min(1).max(255).required(),
     terms_condition: joi.string().min(1).max(50).required(),
     status: joi.string().min(1).max(255).required(),
     country: joi.string().min(1).max(1000).required(),
     image: joi.string().required()
})
const validate = async(req, res, next) =>{
    const value = await schema.validate(req.body)
    if(value.error){
        res.send({error:value.error.details[0]})
    }else{
       next();
    }
}
module.exports= {validate}