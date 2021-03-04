//fetch ("http://localhost:3000/customers")

//.then(response => response.json())
//.then(console.log)

fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(customers => {

document.getElementByID("pokemon").innerHTML=pokemon.map(pokemon => `<div>$
{pokemon.name}: ${pokemon.name}</div>`).join("")
}

.then(console.log);
