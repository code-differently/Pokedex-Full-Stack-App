const express = require('express')
const mysql = require("mysql");
const cors = require("cors");
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  app.get('/pokemon', async (req, res) => {
    let customerData = await getCustomerData();
    res.send(customerData);
  })

  app.listen(port, () => {
    console.log (`Example app listening at http://localhost:${port}`)
  })


async function getCustomerData(){

  let con = mysql.createConnection ({

  password: "Pakistan@777",
  user: "root",
  database: "pokedex",
  host: "localhost",
  });

 let data = await new Promise ((resolve, reject) => {
    con.query ("SELECT * FROM pokemon", (err, result) => {
      (err) ? reject(err) : resolve(result);

    })

 })
con.end();

return data;

}

