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
    password: "password",
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

async function getFromAPI() {
  let promises = [];

  for (let i = 1; i <= 151; i++) {
    let response = axios.get(`https://pokeapi.co/api/v2/pokemon${i}`);
    promises.push(response);
  }

  let responses = await Promise.all(promise);

  return responses
    .map((response) => response.data)
    .map((data) => ({
      id: data.id,
      name: data.name,
      types: data.types.map((type) => type.type.name),
      img: data.sprites["other"]["official-artwork"]["front_default"],
    }));
}

async function loadPokemonData() {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
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
