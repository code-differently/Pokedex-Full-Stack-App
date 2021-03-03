

const express = require('express') // generate express application 
let mysql = require('mysql');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


function getCustomerData(){


let con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "classicmodels"
});

//con.connect(err => {
//  if(err) {
 //   throw err;
//  }
  con.query("SELECT * FROM customers", (err, result, fields) => { // if error have reject error 
    if (err){
        throw err;
    }
    console.log(result);
    con.end();
  });
});
}

let data = getCustomer();
console.log(data);