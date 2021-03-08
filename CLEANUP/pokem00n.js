
fetch("http://localhost:5000/pokemons")
    .then(res => res.json())
    .then(pokemons => {
        document.getElementById("pokemons").innerHTML = pokemons.map(pokemons => `<div>${pokemons.pokeid}: ${pokemons.name}: ${pokemons.img}</div>`).join("")
    })


// fetch("http://localhost:5000/pokemons")
//  .then(res => res.json())
//  .then(console.log)
