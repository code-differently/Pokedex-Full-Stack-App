const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
// app.get("/v3/pokemons", async (req, res) => {
//   let pokedex2 = await getPokemonsFromDatabase();
//   res.send(pokedex2);
// })

app.get("/pokemons", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  let pokemonData = await getPokemonsFromDatabase();
  res.send(pokemonData);
});

async function getPokemonsFromDatabase() {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password" /*remove b4 uploading to gitHub*/,
    database: "Pokedex2",
  });

  let data = await new Promise((resolve, reject) => {
    con.query(`select p.id AS id, p.name AS name, p.url AS url, min(t.name) AS TypeName
    from pokemons AS p inner join pokemon_types AS pt on p.id = pt.pokemonId
    inner join types AS t on pt.typeId = t.id
    group by id, name, url
    order by p.id;`, (err, result, fields) => {
      err ? reject(err) : resolve(result);
    });
  });

  con.end();

  return data;
}

async function getFromAPI() {
  let promises = [];
  for (let i = 1; i <= 30; i++) {
    let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
    promises.push(response);
  }
  let responses = await Promise.all(promises);
  return responses
    .map((response) => response.data)
    .map((data) => ({
      id: data.id,
      name: data.name,
      types: data.types.map((type) => type.type.name),
      img: data.sprites["other"]["official-artwork"]["front_default"],
    }));
}

async function loadDatabase() {
  let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pokedex2",
  });

  let data = await getFromAPI();
  console.log(data);
  //Insert pokemon into pokemons table ... Do first

  /*data.forEach((pokemon) => {
    con.query(
      `INSERT INTO pokemons (id, name, url) VALUES (${pokemon.id}, "${pokemon.name}", "${pokemon.img}");`
    );
  });
  */

  let uniqueTypes = new Set();
  data.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      uniqueTypes.add(type);
    });
  });
  uniqueTypes = [...uniqueTypes];
  //Do 2nd ...Insert into the Types Table
  // for(let i = 0; i < uniqueTypes.length; i++) {
  //   con.query(`INSERT INTO types (id, name) VALUES (${i+1}, "${uniqueTypes[i]}");`)
  // }

  data.forEach((pokemon) => {
    pokemon.types.forEach((type) => {
      let typeId = uniqueTypes.indexOf(type) + 1;
      con.query(
        `INSERT INTO pokemon_types (pokemonId, typeId) VALUES (${pokemon.id}, ${typeId});`
      );
    });
  });
  console.log(data);
}

//for testing purpose */
//loadDatabase()
// app.get("/pokemon", async (req, res) => {
//   let pokedex = await getPokedex();
//   res.send(pokedex);
// })
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
// async function getPokedex(){
// let con = mysql.createConnection({
//       host:"localhost",
//       user: "root",
//       password: "password",
//       database:"pokedex2"
//   });
//     let data = await new Promise((resolve, reject) => {
//      con.query("SELECT * FROM pokeman", (err, result) => {
//       (err) ? reject(err) : resolve(result);
//       })
//     })
//    con.end();
//    return data;
//}
// getPokedex().then(console.log);
