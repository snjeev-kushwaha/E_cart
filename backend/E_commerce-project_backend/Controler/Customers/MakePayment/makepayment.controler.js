const con = require("../../../Modal/modal");

let get = async (req, res) => {
  try {
    const data = "SELECT * FROM make_payment";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ error: err.sqlMessage })
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch {
    res.send(err.sqlMessage)
  }
}

let post = async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO make_payment SET ?";
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
    let data = [req.body, req.params.invoice]
    const data1 = "UPDATE make_payment SET ? WHERE invoice =?"
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch {
    res.send(err.sqlMessage)
  }
}

let destroy = async (req, res) => {
  try {
    let data = [req.params.invoice]
    const data1 = "DELETE FROM make_payment WHERE invoice =?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage)
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch {
    res.send(err.sqlMessage)
  }
}

module.exports = {get, post, update, destroy}