
const express = require("express");
let mysql = require("mysql");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/customers", async(req, res) => {
  let customerData = await getCustomerData();
  res.send(customerData);
});

app.get("/pokemon", async(req, res) => {
  let pokemonData = await getPokemonData();
  res.send(pokemonData);
});

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
});

async function getPokemonData() {

let con = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "",
  database:"Pokedex"
});

let data = await new Promise((resolve, reject )=> {
  con.query("SELECT * FROM pokemon", (err, result, fields) => {
    (err) ? reject(err) : resolve(result);
  });
});

    con.end();

    return data;
}


