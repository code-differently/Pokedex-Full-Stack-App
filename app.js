// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// app.get("/customers", async (req, res) => {
//     let customerData = await getCustomerData();
//     res.send(customerData);
// })

// async function getCustomerData(){

var mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'password',
    database: "classicmodels"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected")
});

// let data = await new Promise((resolve, reject) => {
//     con.query("SELECT * FROM customers", (err, result, fields) => {
//         if(err){
//             reject(err)
//         }
//         else {
//             resolve(result)
//         }
//     })
// })

con.end();

return data;

//}
