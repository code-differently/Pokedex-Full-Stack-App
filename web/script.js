fetch("http://localhost:3000/pokemon")
    .then(res => res.json())
    .then(customer => {
        document.getElementById("customers").innerHTML = customer.map(customer => `<div>${customer.name}: ${customer.number}</div>`).join("")
    });