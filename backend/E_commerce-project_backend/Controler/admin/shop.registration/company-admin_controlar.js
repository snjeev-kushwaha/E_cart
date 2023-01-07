const con = require("../../../Modal/modal");

const get = async (req, res) => {
  try {
    let data = "SELECT * FROM shop_registration";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch (err){
    res.send(err.sqlMessage)
  }
}

 const post = async (req, res) => {
  try {
    let data = req.body;
    let data1 = "INSERT INTO shop_registration SET ?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    });
  }
  catch (err) {
    res.send(err.message)
  }
}

const update = async (req, res) => {
  try {
    let data = [req.body, req.params.shop_registration]
    let data1 = "UPDATE shop_registration SET ? WHERE Reg_no =?"
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.send(err.sqlMessage);
  }
}

const destroy = async (req, res) => {
  try {
    let data = req.params.shop_registration;
    let data1 = "DELETE FROM shop_registration WHERE Reg_no =?";
   await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.send({Error: err.message});
  }
}

module.exports ={get, post, update, destroy}