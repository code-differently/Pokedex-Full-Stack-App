let pokemonId = document.getElementById('pokemonId');
let pokemonName = document.getElementById('name');
let color = document.getElementById('color');
let weakness = document.getElementById('weakness');

//Using fetch with an anonymous self-invoking function
fetch('http://localhost:3000/pokedex')
    .then(function(res) {
        res.json()
    .then(function(res) {
        pokemonId.innerHTML = `<strong>ID:</strong> ` + res[0].pokemon_id;
        pokemonName.innerHTML = `<strong>Name:</strong> ` + res[0].name;
        color.innerHTML = `<strong>Color:</strong> ` + res[0].color;
        weakness.innerHTML = `<strong>Weakness:</strong> ` + res[0].weakness;
        console.log(res);
    });
});

//Using fetch an arrow function
// fetch('http://localhost:3000/pokedex')
//     .then( res => res.json() )
//     .then( res => queryResult.innerHTML = res[0].customerName );