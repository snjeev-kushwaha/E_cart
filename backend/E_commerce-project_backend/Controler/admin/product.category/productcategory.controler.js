const con = require("../../../Modal/modal");

const get = async (req, res) => {
  try {
    let data = "SELECT * FROM  product_category";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.json({Error: err.message})
  }
}

const post = async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO  product_category SET ?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    });
  }
  catch (err) {
    res.json({Error: err.message})
  }
}

const update = async (req, res) => {
  try {
    let data = [req.body, req.params.category_id]
    let data1 = "UPDATE  product_category SET ? WHERE category_id =?"
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.json({Error: err.message});
  }
}

const destroy = async (req, res) => {
  try {
    let data = [req.params.category_id]
    let data1 = "DELETE FROM  product_category WHERE category_id =?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.json({Error: err.message})
  }
}

module.exports = {get, post, update, destroy}