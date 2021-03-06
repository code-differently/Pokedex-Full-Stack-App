const mysql = require('mysql');
const express = require('express');
const fetch = require('node-fetch');
const app = express()
const port = 5000
// const cors = require("cors");
// app.use(cors())

app.get('/', (req, res) => {
    res.send('#FlyEaglesFly')
})

app.get("/pokemons", async (req, res) => {
  let pokemonData = await getPokemonData()
  res.send(pokemonData);
})


app.listen(port, () => {
    console.log(`Starting Pokedex app at http://localhost:${port}`)
})

async function getPokemonData(){

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "linux5All##",
    database: "pokedex"
  });

  let data =  await new Promise((resolve, reject) => {
    con.query("SELECT * from pokemon", (err, result) => {
      (err) ? reject(err): resolve(result);
    })
  })

  con.end();

  return data;
}
