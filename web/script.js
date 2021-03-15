
    fetch("http://localhost:3000/pokemon")
      .then(response =>response.json())
      .then(customers => {
        document.getElementById("customers").innerHTML =  customers.map(customer => `<div>${customer.pokemon_id}: ${customer.name}</div>`).join("")
      });

      
