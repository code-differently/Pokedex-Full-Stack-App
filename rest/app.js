const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
console.log(hello);

let pokedex = document.getElementById("pokedex");
console.log(pokedex);
let url = "https://pokeapi.co/api/v2/pokemon/";
let fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 139; i++, status == 200) {
    // console.log(url + i);
    
      promises.push(fetch(url + i).then((res) => {
        return res.json();
      
    }));
  }

  Promise.all(promises).then(results => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_shiny'],
      type: data.types[0].type.name
    }));
    displayPokemon(pokemon);
  });
};
let thisPokemon;
let displayPokemon = (pokemon) => {
  // console.log(pokemon.type);
  const pokemonHTMLString = pokemon.map(
    (pokeman) => `  
          <div class = "card ${pokeman.type}">
                <img src= "${pokeman.image}" />
                <h2> ${pokeman.id}. ${pokeman.name}</h2>
                <p>Type: ${pokeman.type}</p>
           </div>
      `).join('');
  pokedex.innerHTML = pokemonHTMLString;
  //   return cardColor();
};
// card.classList.add('card', `${​​​​​pokeman.types[0].type.name}​​​​​`, 'font-weight-bold');
function cardColor() {
  if (pokeman.type === 'grass') {
    document.getElementsByClassName("card")[0].style.backgroundColor = "blue";
  }
};
fetchPokemon();