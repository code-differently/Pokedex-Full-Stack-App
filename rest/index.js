const express = require('express');
const fetch = require('node-fetch');
const cors = require("cors");

const app = express()
app.use(cors())
const port = 4000



app.get('/all/:count', async (req, response) => {
  const count = req.params.count;
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`)
    .then((res) => res.json())
    .then((allThePokemon) => {
        const requestsToMake = allThePokemon.results.map(({ url }) =>
          fetch(url).then((res) => res.json())
        );
        return Promise.all(requestsToMake);
      })
    .then(data => {
      let responseResult = [];
      for( let i = 0; i < count; i++){
        let responseObject = { id: data[i].id, name: data[i].name, type: data[i].types[0].type.name, image: data[i].sprites.back_default};
        responseResult.push(responseObject);
      }
      response.json(responseResult);
    })
  .catch(err => console.error(err));
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})