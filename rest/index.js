const express = require('express')
const app = express()
const port = 3000
let mysql = require('mysql');
let pass = '';

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get("/pokedex", async (req, res) => {
  let pokedexData = await getPokedexData();
  res.send(pokedexData);
})

async function getPokedexData() {

  let conn = mysql.createConnection({
    host: "localhost",
    user: "",
    password: pass,
    database: "pokedex"
  });
  
  let data = new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Pokemon", (err, result, fields) => {
      (err) ? reject(err) : resolve(result);
    })
  })

  conn.end();

  return data;

}