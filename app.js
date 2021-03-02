 // Remeber we passed data to EJS, we're using it here.
    // It gives us a string of names seperated with ','. Ex. pikachu,ivysaur,charmeleon
    // We're using split method to split on every ',' and make it an element of the array.
    let pokemonsArray = "<%= pokemons %>".split(",");
    // we are setting all pokemon to an empty array
    let allPokemons = [];
    // window.onload will be fired when the entire page loads
    window.onload = async () => {
      // we are targeting the get-pokemon id and adding an event listener
      let btn = document
        .getElementById("get-pokemon")
        .addEventListener("click", () => {
          const pokemonDiv = document.getElementById("pokemonDiv");
          // .forEach() we typically need an item and an index, but its does not matter how many arguments are passed.
          allPokemons.forEach((pokemon) => {
            pokemonDiv.innerHTML += `<div class="pokemon-card ${pokemon.types[0].type.name}" >
              <a href="/${pokemon.id}">
          <div class="header">
          <p>${pokemon.name}</p>
          <p>#${pokemon.id}</p>
        </div>
        <div>
          <img
            src="${pokemon.img}"
            alt="${pokemon.name}"
          />
        </div>
        </a>
      </div>`;
          });
        });

      // We're making another API request below since the server gives us names of the pokemons.
      // We're using these names to make a request to API and then get data for specific Pokemon.
      pokemonsArray.forEach(async (pokemon) => {
        let pokemonInfo = {};

        await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
          .then((res) => res.json())
          .then((newRes) => {
            // then extracting the required data & pushing it to an array.
            allPokemons.push({
              id: newRes.id,
              name: newRes.name,
              img: newRes.sprites.other["official-artwork"]["front_default"], //object keys that have spaces or dashes can be accessed using ['key-name']
              types: newRes.types,
            });
          });
      });
    };