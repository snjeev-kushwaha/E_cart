const con = require("../../../Modal/modal");

let get =  async (req, res) => {
  try {
    const data = "SELECT * FROM product_Inventory";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.send(err.sqlMessage)
  }
}

let post = async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO product_Inventory SET ?";
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

let update = async (req, res) => {
  try {
    let data = [req.body, req.params.product_id]
    const data1 = "UPDATE product_Inventory SET ? WHERE product_id =?"
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.send(err.sqlMessage)
  }
}

let destroy = async (req, res) => {
  try {
    let data = [req.params.product_id]
    const data1 = "DELETE FROM product_Inventory WHERE product_id =?";
    con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.send(err.sqlMessage)
  }
}
module.exports = {get, post, update, destroy}