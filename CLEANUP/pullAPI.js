const express = require('express');
const fetch = require('node-fetch');
const cors = require("cors");


async function getFromAPI(){
    let promises = []
    for (let i = 1; i <= 4; i++){
      let response = axios.get(`https://pokeapi.com/api/v2/pokemon/${i}`)
      promises.push(response)
    }
    let responses = await Promise.all(promises)
    return responses.map(response => response.data).map(data => ({
      "id": data.id,
      "name": data.name,
      "types": data.types.map(type => type.type.name),
      "img": data.sprites["other"]["official-artwork"]["front_default"]
    }))

    console.log(getFromAPI)
}



//   let data = await getFromAPI();

//     data.forEach(pokemon => { 
//         con.query(`INSERT INTO pokemon (id, name, img) VALUES (${pokemon.id}, "${pokemon.name}", "${pokemon.img}");`);
//     })

//     con.end();


// loadDatabase();