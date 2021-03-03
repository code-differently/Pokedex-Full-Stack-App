fetch("http://localhost:3000/customers")
.then(response => response.json())
.then(customers => {
    document.getElementById("customers").innerHTML = customers.map(customer => `<div>${customer.customerNumber}: ${customer.customerName}<div>`).join("")
})
.then(console.log)