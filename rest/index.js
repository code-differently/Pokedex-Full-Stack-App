const express = require('express');
const cors = require("cors");
const mysql = require("mysql");
const fetch = require('node-fetch');
const app = express();
app.use(cors());
const port = 3000;


async function getAllPokemon(){
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "pokedex"
  });

    let data = await new Promise((resolve, reject) => {
      connection.query("SELECT * FROM pokemon", (err, result, fields) =>{
        (err) ? reject(err) : resolve(result);
      })
    })

    connection.end();
    return data;
}

app.get('/all', async (req, res) =>{
  let pokemon = await getAllPokemon();
  res.send(pokemon);
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
