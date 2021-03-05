const password = "myPasswordGoesHere!"  //my pw to access db goes here

const express = require('express')
let mysql = require('mysql')
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())  //required to permit cross-origin resource sharing

app.get('/customers', async (req, res) => {
  let customerData = await getCustomerData();
  res.send(customerData);
})

app.listen(PORT, () => { //set up server
  console.log(`Server is listening at http://localhost:${PORT}`)
});

async function getCustomerData(){
  
  let con = mysql.createConnection({  //open db connection
    host: "localhost",
    user: "root", //your username
    password: password,
    database: "classicmodels"
  });

  let data = await new Promise((resolve, reject) => { 
    con.query("SELECT * FROM customers", (err, result, fields) =>
    { 
      if (err) {
        reject(err)
      }
      else { 
        resolve(result)
        console.log(result)
      }
      //above as ternary - (err) ? reject(err) : resolve(result);
    })
  })

  con.end(); //close db connection

  return data;  //from promise above

}
