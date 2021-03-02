
const express = require('express')
let mysql = require("mysql");
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get("/pokemon", async (req, res) => {
  let pokedex = await getPokedex();
  res.send(pokedex);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


async function getPokedex(){
  let con = mysql.createConnection({
        host:"localhost",
        user: "root",
        password: "malakies2020",
        database:"pokedex"
    });

    let data = await new Promise((resolve, reject) => {
     con.query("SELECT * FROM pokeman", (err, result) => {
      (err) ? reject(err) : resolve(result);
      })
    })

   con.end();

   return data;

  }

  // getPokedex().then(console.log);