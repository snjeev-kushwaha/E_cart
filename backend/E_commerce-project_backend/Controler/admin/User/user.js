const con = require("../../../Modal/modal");

let get = async (req, res) => {
  try {
    const data = "SELECT * FROM user";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ status: 400, response: err.sqlMessage });
  }
};
let post = async (req, res) => {
  try {
    const data1 = req.body;
    const data = "INSERT INTO user SET ?";
    await con.query(data, data1, (err, result) => {
      if (err) {
        return res.send(err.sqlMessage);
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ status: 400, response: err.sqlMessage });
  }
};

let update = async (req, res) => {
  try {
    const data1 = [req.body, req.params.user_Id];
    const data = "UPDATE user SET ? WHERE user_Id =?";
    await con.query(data, data1, (err, result) => {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ status: 400, response: err.sqlMessage });
  }
};

let destroy = async (req, res) => {
  try {
    const data = req.params.user_Id;
    const data1 = "DELETE FROM user WHERE user_Id =?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.send({ status: 400, response: err.sqlMessage });
  }
};
module.exports ={get, post, update, destroy}