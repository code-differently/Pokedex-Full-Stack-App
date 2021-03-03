fetch("http://localhost:3000/pokedex")
.then(response => response.json())
.then(console.log('success'))
// .then(customers => 
//     document.getElementById("customers").innerHTML = customers.map(customer => `<div>${pokedex.customerNumber}: ${customer.customername}</div>`).join("")    
// )
