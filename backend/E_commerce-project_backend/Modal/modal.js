const mysql = require("mysql");

let con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e_cart"
})

con.connect((err) => {
   if(err){
    console.log(err.sqlMessage)
   }else{
    console.log("MYSQL connected ")
   }
})

module.exports = con;
