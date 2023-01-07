const con = require("../../../Modal/modal");

const get = async (req, res) => {
  try {
    let data = "SELECT * FROM product_subcategory";
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

const getData = async (req, res) => {
  try {
    let data =
      "SELECT DISTINCT(category_name),category_id FROM product_subcategory LEFT JOIN product_category using(category_id)";
    await con.query(data, (err, result) => {
      if (err) {
        return res.send({ status: 400, response: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ status: 400, response: err.message });
  }
};

const post = async (req, res) => {
  try {
    let data = req.body;
    console.log("post", data);
    let data1 = "INSERT INTO product_subcategory SET ?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ Error: err.message });
  }
};

const update = async (req, res) => {
  try {
    let data = [req.body, req.params.sub_category_id];
    let data1 = "UPDATE product_subcategory SET ? WHERE sub_category_id=?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ Error: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    let data = [req.params.sub_category_id];
    let data1 = "DELETE FROM product_subcategory WHERE sub_category_id =?";
    await con.query(data1, data, (err, result) => {
      if (err) {
        return res.send({ Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch (err) {
    res.json({ Error: err.message });
  }
};

module.exports = { get, getData, post, update, destroy };