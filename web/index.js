//Basic promise
function getPokemon() {
    fetch("http://localhost:4000/api/v2/allPokemon")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  getPokemon();