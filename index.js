let password = "Brother#1"
let mysql = require('password');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "password",
  database: "classicmodels"
});
app.get ('/database', async (req, res))
con.connect(err => {
  if(err) {
    throw err;
  }
  con.query("SELECT * FROM customers", (err, result, fields) => {
    if (err){
        throw err;
    }
    console.log(result);
    res.send(result);
  });
});












