const express = require('express');
const cors = require("cors");
const Sequelize = require('Sequelize');
const fetch = require('node-fetch');
//onst { Pokemon } = require('../seedDB')
const app = express();
app.use(cors());
const port = 5000;

const connection = new Sequelize('pokedex', 'root', 'yourpassword', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Pokemon = connection.define('Pokemon', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING,
  image: Sequelize.STRING
})

app.get('/all', (req, res) =>{
  Pokemon.findall()
    .then(pokemon => res.json(pokemon))
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    })
})


connection
  .sync({
    //logging: console.log,
    //force: true
  })
  .then(() =>{
    console.log('Connection Established');
  })
  .catch(err =>{
    console.error('unable to connect: ',err);
  })
// app.get('/all/:count', async (req, response) => {
//   const count = req.params.count;
//   fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`)
//     .then((res) => res.json())
//     .then((allThePokemon) => {
//         const requestsToMake = allThePokemon.results.map(({ url }) =>
//           fetch(url).then((res) => res.json())
//         );
//         return Promise.all(requestsToMake);
//       })
//     .then(data => {
//       let responseResult = [];
//       for( let i = 0; i < count; i++){
//         let responseObject = { id: data[i].id, name: data[i].name, type: data[i].types[0].type.name, image: data[i].sprites.back_default};
//         responseResult.push(responseObject);
//       }
//       response.json(responseResult);
//     })
//   .catch(err => console.error(err));
// })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = Pokemon;