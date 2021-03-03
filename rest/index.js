

const express = require('express') // generate express application 
let mysql = require('mysql');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/customers", async (req, res) => {
  let customerData = await getCustomerData();
  res.send(customerData);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


async function getCustomerData(){


let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "classicmodels"
});

//con.connect(err => {
//  if(err) {
 //   throw err;
//  }
let data = await new Promise((resolve, reject) =>
  con.query("SELECT * FROM customers", (err, result,field) => { // if error have reject error 
  (err) ? reject(err) : resolve(result);

  })
})

con.end();
 return data;