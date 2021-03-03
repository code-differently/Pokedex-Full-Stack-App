fetch("http://localhost:3000/pokemons").then((response) =>
  response.json()).then(pokemons => {
    document.getElementById("test").innerHTML = pokemons.map(pokemon => `<div>${pokemons.id}</div>`).join('')
  })
