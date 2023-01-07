const con = require("../../../Modal/modal");

const get = async (req, res) => {
  try {
    const data = "SELECT * FROM offer_zone";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({Error: err.sqlMessage})
      }
      res.send({ status: 200, "response": result })
    })
  }
  catch(err) {
    res.send({Error: err.message})
  }
}

const post = async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO offer_zone SET ?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({Error: err.message})
      }
      res.send({ status: 200, "response": result })
    });
  }
  catch (err){
    res.json({Error: err.message})
  }
}

const update = async (req, res) => {
  try {
    let data = [req.body, req.params.offer_id]
    const data1 = "UPDATE offer_zone SET ? WHERE offer_id =?"
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

const destory = async (req, res) => {
  try {
    let data = req.params.offer_id;
    const data1 = "DELETE FROM offer_zone WHERE offer_id =?";
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

module.exports = {get, post, update, destory}