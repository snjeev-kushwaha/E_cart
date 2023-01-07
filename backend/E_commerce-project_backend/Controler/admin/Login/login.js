const con = require('../../../Modal/modal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let userRegister = async (req, res)=>{
    try{
        let{email, phone_no, password} = req.body;
        const Salt = await bcrypt.genSalt(8);
        let hashPassword = bcrypt.hashSync(password,Salt);
        password = hashPassword
        const data = {email, phone_no, password}
      let sqlQuery = 'INSERT INTO Login SET ?';
      await con.query(sqlQuery, data, (err, result) =>{
        if(err){
            return res.json({Error: err.message});
        }
        res.json({ status: 200, response: email, phone_no, password });
      })
    }
    catch(err){
        res.json({status:400, response:err.message})
    }
}

let userLogin = async(req, res)=>{
    try{
        let {email,phone_no, password} = req.body;
        let sqlQuery = `SELECT * FROM Login WHERE email="${email}" OR phone_no ="${phone_no}"`
        await con.query(sqlQuery, async(err, result) =>{
            if(err){
                return res.json({Error: err.message});
            }
            // if(result === [] || result == undefined){
            //     return res.json({response:"Email id or the phone number doesn't exists"})
            // }
            // console.log(result)
            const userresponse = result[0].password
            const passwordCheck = await bcrypt.compare(password, userresponse);
            if(!passwordCheck){
                return res.json({Error:"oops wrong password"});
            }
            const token = await jwt.sign({email},process.env.jwt_SECRET_KEY, {expiresIn:"1d"})
            res.json({status:200, response:"logged is successfully",token,email})
        })
    }
    catch(err){
        res.json({status:400, "response":err.message})
    }
}

// app.get('/alluser', async (req, res) => {
//     try {
//         let token = req.header("token")
//         let tokenVerify = await jwt.verify(token, "my name is anku")
//         if (!token) {
//             return res.send({ Error: "token does not match" })
//         }
//         let query = "SELECT * FROM login"
//         await con.query(query, (error, output) => {
//             if (error) {
//                 return res.send({ Error: error.sqlMessage })
//             }
//             res.send(output)
//         })
//     } catch (error) {
//         res.send({ Error: error.message })
//     }
// })


module.exports = {userRegister, userLogin}