// let mysql = require("mysql");

// let con = mysql = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: password,
//     database: "classicmodels"
// });

// con.connector(err => {
//     if(err){
//         throw err;
//     }
//     con.query("SELECT * FROM customers", (err, result, fields) => {
//         if(err){
//             throw err;
//         }
//         console.log(result)
//     })
// });

// const Sequelize = require('sequelize');
// let sequelize = new Sequelize('mysql://root:${password}@:port/dbname-sample');

// let Users = sequelize.define('users', {
//     name: Sequelize.STRING,
//     age: Sequelize.INTEGER,
//     username: Sequelize.STRING
// });

// Users.findAll().then(console.log)