fetch("http://localhost:3000/pokeman")
    .then(response => response.json())
    .then (console.log("IN SCRIPT.JS FILE"))
    .then (pokemon => {
        pokemon.map(pokemon => `<div>${pokemon.name} ${pokemon.id}</div>`).join("")
    })






   