//The backend information goes here
const express = require("express");
let mysql = require("mysql");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/pokemons", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let pokemonData = await getPokemonData();
  res.send(pokemonData);
});

async function getPokemonData() {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password" /*remove b4 uploading to gitHub*/,
    database: "Pokedex",
  });

  let data = await new Promise((resolve, reject) => {
    con.query("SELECT * FROM pokemons", (err, result, fields) => {
      err ? reject(err) : resolve(result);
    });
  });

  con.end();

  return data;
}

async function LoadPokemonData() {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password" /*remove b4 uploading to gitHub*/,
    database: "Pokedex",
  });

  let data = await new Promise((resolve, reject) => {
    con.query("SELECT * FROM pokemons", (err, result, fields) => {
      err ? reject(err) : resolve(result);
    });
  });

  con.end();

  return data;
}
