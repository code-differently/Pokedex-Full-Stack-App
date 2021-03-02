const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const password = "myPasswordGoesHere"
let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root", //your username
  password: password,
  database: "classicmodels"
});

app.use(cors());

con.connect(err => {
  if(err) {
    throw err;
  }
  con.query("SELECT * FROM customers", (err, result, fields) => {
    if (err) {
      throw err;
    }
  // console.log(result); //prints results to terminal

    app.get('/customer', (req, res) => { 
      res.send(result);  //sends results to browser
    })

  });

});

//Sets up server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${ port }`)
})

