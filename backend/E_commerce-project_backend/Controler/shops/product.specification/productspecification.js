const con = require("../../../Modal/modal");

let get = async(req, res) =>{
   try{
    const data = [req.params.product_id]
    const data1 = "SELECT * FROM product_specification WHERE product_id = ? ";
    await con.query(data1, data, (err, result) =>{
      if(err){
        return res.send({Error: err.sqlMessage});
      }
      res.send({status: 200, "response": result})
    })
   }
   catch(err){
    res.send(error.sqlMessage);
   }
}

module.exports = get;