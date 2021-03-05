const mysql = require('mysql');
const express = require('express');
const app = express()
const port = 4000

// const fetch = require('node-fetch');
// const cors = require("cors");
// app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/pokemons",  async (req, res) => {
  let pokemonData = await getPokemonData()
  res.send(pokemonData);
})


app.listen(port, () => {
    console.log(`Example app Listening at http://localhost:${port}`)
})

async function getPokemonData(){

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "linux5All##",
    database: "pokedex"
  });

  let data =  await new Promise((resolve, reject) => {
    con.query("SELECT * from pokemon", (err, result, fields) => {
      (err) ? reject(err): resolve(result);
    })
  })

  con.end();

  return data;

}

getPokemonData()
  .then(console.log)