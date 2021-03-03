
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 3360;

app.use(cors());

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "######", // not showing my password here
  database: "Pokedex"
});

con.connect(err => {
  if(err) {
    throw err;
  }
  con.query("SELECT * FROM POKEMON_Card", (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    app.get('/Pokedex', async (req, res) => {
    res.send(result)
    })
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/Pokedex`)
})