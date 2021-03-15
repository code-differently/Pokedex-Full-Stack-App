const password = "************" // removed actual password for lab submission
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

app.get('/pokedex', async (req, res) => {
  con.connect(err => {
    if(err) {
      throw err;
    }
    con.query("SELECT * FROM pokemon", (err, result, fields) => {
      if (err) {
        throw err;
      }
      //console.log(result);
      res.send(result)
      con.end(); // ends the connection after querry request
      //return result;
    })
  });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/pokedex`)
})