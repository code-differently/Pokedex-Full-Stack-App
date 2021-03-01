const express = require('express')
const app = express()
const port = 3000
let mysql = require('mysql');
let password = 'password';
const cors = require("cors")

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "classicmodels"
});

con.connect(err => {
  if(err) {
    throw err;
  }
});

app.get('/database', async (req, res) => {

      con.query("SELECT * FROM customers", (err, result, fields) => {
        if (err){
            throw err;
        }
        console.log(result);
        res.send(result);
      });

  
    
});