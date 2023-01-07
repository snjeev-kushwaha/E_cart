const joi = require("joi");

const schema = joi.object({
    fullname: joi.string().min(2).max(500).required(),
    email: joi.string().min(4).max(50).required(),
    password: joi.string().min(4).max(10).required(),
    dateofjoin: joi.date().required(),
    role: joi.string().min(2).max(50).required(),
    status: joi.valid("active","deactive",'Active','Deactive').required()
})
const validate = async(req, res, next) =>{
    const value = await schema.validate(req.body);
    if(value.error){
        res.send({error: value.error.details[0]})
    }else{
        next();
    }
}

module.exports = {validate}