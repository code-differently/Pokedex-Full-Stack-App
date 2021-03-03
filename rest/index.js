//The backend information goes here
const express = require('express')
let mysql = require("mysql");
const app = express()
const port = 3000
//let cors = require('cors');

//app.use(cors());

/*
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Add Access Control Allow Origin headers

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
*/

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
}) ;
*/

app.get('/pokemons', (req, res) => {
  let pokemonData = getPokemonData();
  res.send(pokemonData);
  //console.log("I am in /pokemons route:" + pokemonData);
}
);

async function getPokemonData(){
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password" ,/*remove b4 uploading to gitHub*/
  database: "pokedex"
});

let data = await new Promise((resolve, reject) => {
  con.query("SELECT * FROM pokemons", (err, result, fields) => {
    (err)? reject(err) : resolve(result);
    //console.log("I am in Promise section: here are the results" + result);
})

})
con.end();
return data;
}