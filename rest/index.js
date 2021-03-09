const express = require('express');
const fetch = require('node-fetch');
const cors = require("cors");
const mysql = require("mysql");
const axios = require("axios");

const app = express()
app.use(cors())
const port = 4000


app.get('/', (req, res) => {
    res.send('#FlyEaglesFly')
})

app.get("/pokedex", async (req, res) => {
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
      password: "password",
      database: "pokedex"
    });
  
    let data =  await new Promise((resolve, reject) => {
      con.query("SELECT pokemon.ID AS id, name,types.type, img FROM pokemon join poke_type on pokemon.id = poke_type.pokeId join types on poke_type.typeId = types.id order by pokeId;", (err, result, fields) => {
        (err) ? reject(err): resolve(result);
      })
    })
  
    con.end();
  
    return data;
}



async function getFromAPI(){
    let promises = []

    for(let i = 1; i <= 300; i++){
        let response = axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        promises.push(response)
        }

        let responses = await Promise.all(promises)

        return responses.map(response => response.data).map(data => ({
            "id": data.id,
            "name": data.name,
            "types": data.types.map(type => type.type.name),
            "img": data.sprites["other"]["official-artwork"]["front_default"]
        }))    
}

async function loadDatabase(){

    let con = mysql.createConnection({
        host: "localhost",
        user: "root", 
        password: "linux5All##", 
        database: "pokedex"
    });


    let data = await getFromAPI();

    // Insert data int pokemon table
    
    data.forEach(pokemon => {
        con.query(`INSERT INTO pokemon(id, name, img) VALUES (${pokemon.id}, "${pokemon.name}", "${pokemon.img}");`);
    })

    // prevents duplicate types

    let uniqueTypes = new Set();
    data.forEach(pokemon => {
        pokemon.types.forEach(type =>{
            uniqueTypes.add(type)
        })
    })
    uniqueTypes = [...uniqueTypes]


    // Insert data into type table

    for(let i = 0; i < uniqueTypes.length; i++){
        con.query(`INSERT INTO type(id, name) VALUES (${i+1}, "${uniqueTypes[i]}");`)
    }

    // Insert data into poke_type junction table

    data.forEach(pokemon => {
        pokemon.types.forEach(type => {
            let typeId= uniqueTypes.indexOf(type) +1;
            con.query(`INSERT INTO poke_type (pokeId, typeId) VALUES (${pokemon.id}, ${typeId});`)
        })
    })

    con.end();     
}
