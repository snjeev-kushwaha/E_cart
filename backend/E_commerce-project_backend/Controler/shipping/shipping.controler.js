// const express = require("express");
// const cors = require("cors");
const con = require("../../Modal/modal");
// const app = express();
// app.use(express.json());
// app.use(cors());
// const port = 5050;
let get = async (req, res) => {
  try {
    const data = "SELECT * FROM shipping";
    await con.query(data, (err, result) => {
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
let post = async (req, res) => {
  try {
    let data = req.body;
    const data1 = "INSERT INTO shipping SET ?";
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
    let data = [req.body, req.params.ship_id]
    const data1 = "UPDATE shipping SET ? WHERE ship_id =?"
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
    let data = [req.params.ship_id]
    const data1 = "DELETE FROM shipping WHERE ship_id =?";
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
module.exports = {get, post, update, destroy};