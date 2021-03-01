function getPokemon() {
    fetch("http://localhost:4000/api/v2/allPokemon")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  getPokemon();