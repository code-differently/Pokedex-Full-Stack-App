
let password = "";

let mysql = require('mysql');

let con = mysql.createConnection({
host: "localhost",
user: "root",
password: password,
database: "classicmodels"
});

con.query("SELECT * FROM customers", (err, result, fields) => {
console.log(result);
});


//use classicmodels; -database
//SELECT * FROM customers;
