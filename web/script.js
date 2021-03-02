fetch('http://localhost:3000/customer') //connects with app.get () in rest/index.js file
  // .then(res => res.json());
  .then(function (res)
  {
    res.json()
  .then(function (res)
  {
    document.getElementById('fetchPokeData').innerHTML = res[3].customerName;
    // console.log(res);
  });
    
  });
  