
fetch("http://localhost:3000/pokemons")
    .then(response => response.json())
    .then(console.log)