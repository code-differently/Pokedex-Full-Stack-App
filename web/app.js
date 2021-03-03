let PokemonID = document.getElementById('ID');
let PokemonType = document.getElementById('Type');
let PokemonName = document.getElementById('Name');
let PokemonColor = document.getElementById('Color');


fetch('http://localhost:33600/Pokedex')
    .then(function(res) {
        res.json()
    .then(function(res) {
        PokemonID.innerHTML = `ID:` + res[0].Pokemon_ID;
        PokemonType.innerHTML = `Type: ` + res[0].Pokemon_Type;
        PokemonName.innerHTML = `Name:` + res[0].Pokemon_Name;
        PokemonColor.innerHTML = `Color:` + res[0].Pokemon_Color;
        console.log(res);
    });
});

