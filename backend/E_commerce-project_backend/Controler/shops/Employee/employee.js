const con = require("../../../Modal/modal");

let get = async (req, res) => {
    try{
        const data = "SELECT * FROM employee";
        await con.query(data, (err, result) => {
            if(err){
                return res.send({Error: err.sqlMessage});
            }
            res.send({status: 200, "response": result})
        })
    }
    catch(err) {
        res.send(err.sqlMessage);
    }
}

let post = async (req, res) =>{
    try{
        const data = req.body;
        const data1 = "INSERT INTO employee SET ?";
        await con.query(data1, data, (err, result) => {
            if(err){
                return res.send({Error: err.sqlMessage});
            }
            res.send({status: 200, "response": result})
        })
    }
    catch(err){
        res.send(err.sqlMessage)
    }
}

let update = async (req, res) => {
    try{
        const data = [req.body, req.params.employee_id]
        const data1 ="UPDATE employee SET ? WHERE employee_id = ?";
        await con.query(data1, data, (err, result) => {
            if(err){
                return res.send({Error: err.sqlMessage});
            }
            res.send({status: 200, "response":result})
        })
    }
    catch(err){
        res.send(err.sqlMessage);
    }
}

let destroy = async (req, res) => {
    try{
    const data = req.params.employee_id;
    const data1 = "DELETE FROM employee WHERE employee_id = ?";
    await con.query(data1, data, (err, result) => {
        if(err){
            return res.send({Error: err.sqlMessage});
        }
        res.send({status: 200, "response":result});
    })
    }
    catch(err){
        res.send(err.sqlMessage);
    }
}

module.exports = {get, post, update, destroy}