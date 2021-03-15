//Using fetch with an arrow function
fetch('http://localhost:3000/pokedex')
    .then( res => res.json() )
    .then(pokemons => {                                                         //2nd callback name.column_name
        document.getElementById("pokemons").innerHTML = pokemons.map(pokemon => `<div>ID: ${pokemon.pokemon_id} | Name: ${pokemon.name} | Color: ${pokemon.color} | Weakness: ${pokemon.weakness}</div>`).join("") });

//Using fetch with an anonymous self-invoking function
// fetch('http://localhost:3000/pokedex')
//     .then(function(res) {
//         res.json()
//     .then(pokemons => {                                                            //2nd callback name.column_name
//            document.getElementById("pokemons").innerHTML = pokemons.map(pokemon => `<div>ID: ${pokemon.pokemon_id} | Name: ${pokemon.name} | Color: ${pokemon.color} | Weakness: ${pokemon.weakness}</div>`).join("") });