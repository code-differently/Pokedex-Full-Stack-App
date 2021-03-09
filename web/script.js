// create an XHR object
let pokedex = document.getElementById("pokedex");

//console.log(pokedex);

const xhr = new XMLHttpRequest();

// listen for `onload` event
xhr.onload = () => {
  // process response
  if (xhr.status == 200) {
    // parse JSON data

    let pokemonDatas = JSON.parse(xhr.response);

    displayPokemon(pokemonDatas);
  } else {
    console.error("Error!");
  }
};

// create a `GET` request
xhr.open("GET", "http://localhost:3000/pokemons");

// send request
xhr.send();

const displayPokemon = (pokemon) => {
  console.log("In displayPokemon" + pokemon);

  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
   <li class="card"> 
      <h2 class="card-header"><span class="left">${pokeman.name}</span> <span class="right">#${pokeman.id}</span></h2>
      <img class="card-image" src="${pokeman.url}"/>
      <p>Type: ${pokeman.TypeName}</p>
       
   </li>
  `
    )
    .join("");

  pokedex.innerHTML = pokemonHTMLString;
};
