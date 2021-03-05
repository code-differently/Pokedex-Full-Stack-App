
fetch('http://localhost:3000/customers')
  .then(res => res.json())
  // .then(console.log);
  .then(customerData => {
    document.getElementById("allCustomers").innerHTML = customerData.map(customer => `<div>${customer.customerNumber}: ${customer.customerName}</div>`).join("")
  });
