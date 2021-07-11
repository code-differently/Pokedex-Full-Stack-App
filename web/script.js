const typeMapping = {
    "normal": "#A8A77A",
    "fire": "#EE8130",
    "water": "#6390F0",
    "electric": "#F7D02C",
    "grass": "#7AC74C",
    "ice": "#96D9D6",
    "fighting": "#C22E28",
    "poison": "#A33EA1",
    "ground": "#E2BF65",
    "flying": "#A98FF3",
    "psychic": "#F94487",
    "bug": "#A6B91A",
    "rock": "#BA136",
    "ghost": "#735797",
    "dragon": "#6F35FC",
    "dark": "#705746",
    "steel": "#B7B7CE",
    "fairy": "#D685AD"
}

function renderAll() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .catch(error => {
        console.log(error);
    })
    .then(data => {
         document.getElementsByClassName("grid")[0].innerHTML = renderData(data);
    });
}


function renderData(data) {
    const html = data.map(pokemon =>
   
        `<div class="card" style="background-color: ${typeMapping["fire"]};">
            <h4>
                <span>${adjustName(pokemon.name)}</span>
                <div class="poke-id">#${pokemon.id}</div>
            </h4>
            <img src="${pokemon.img}">
         </div>`
    ).join("");
  return html
}

function adjustName(name) {
    return name[0].toUpperCase() + name.substring(1, name.length);
}

renderAll()

