const fetch = require('node-fetch');

const Sequelize = require('sequelize');		

// creating a new connection. Passing db name, user, and password
const conn = new Sequelize('pokedex', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
// create a function that insert pokemon into the database. Passing 3 values name, id, and sprites
function insertIntoDb({name,id,sprite}){
    conn.query(`Insert into POKEMON (pokename, id, sprites) VALUES ("${name}",${id},"${sprite}");`); // this is my query, quotes for text type, none for number
}
  function getRange(start,end){ // creating an empty array, looping thru the range of pokemon I want to collect
      const arr = [];
      for(let i =start; i <= end; i++){
          arr.push(i); // pushing each pokemon into the array
      }
      return arr; // returning the array after pokemon are collected
  }
  function getAllPokemon(){
    // the endpoint is our point of entry, this function will render our range of pokemon.
    const endpoint = `https://pokeapi.co/api/v2/pokemon/`
      return  Promise.all(getRange(1,10).map(id => fetch(`${endpoint}${id}`) // we are returning all "promises" which is our pokemon range specified in the parameters.
      // we are mapping each pokemon to its id that we are fetching from the endpoint.
      .then(res => res.json()) // we are using json on our response
      .then(({name,id,sprites:{front_default:sprite}}) => ({name,id,sprite})))); // 
  }
// lastly we are invoking getAllPokemon then for each pokemon, we are inserting it into our database.
  getAllPokemon().then(pokemon => {
      pokemon.forEach(insertIntoDb)
  });
 // sequelize.query('show tables').then(console.log)