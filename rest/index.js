const password = "password" // removed actual password for lab submission
const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const port = 3000;

app.use(cors());

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "pokedex"
});

con.connect(err => {
  if(err) {
    throw err;
  }
  con.query("SELECT * FROM pokemon", (err, result, fields) => {
    if (err) {
      throw err;
    }
    console.log(result);
    app.get('/pokedex', async (req, res) => {
    res.send(result)
    })
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/pokedex`)
})