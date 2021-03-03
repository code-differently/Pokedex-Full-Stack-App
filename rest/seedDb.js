
 const fetch = require('node-fetch');
 const mysql = require("mysql");
 const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yourpassword",
  database: "pokedex"
});
  

  async function addPokemonToDb(data){
    
    const {name,id,image,type} = data;

    connection.query(`INSERT INTO POKEMON (name, ID, image,type) VALUES ("${name}","${id}","${image}", "${type}")`);
    console.log(`INSERT INTO POKEMON (name, ID, image, type) VALUES ("${name}","${id}","${image}", "${type}")`);
    
  }


  function range(start,end){
      const arr = [];
      for(let i =start; i <= end; i++){
          arr.push(i);
      }
      return arr;
  }

  function getallpokemon(start,end){
    const endpoint = `https://pokeapi.co/api/v2/pokemon/`
      return Promise.all(range(start,end).
      map(id => fetch(`${endpoint}${id}`).
      then(res =>res.json()).
      then( ({name,id, sprites:{front_default:image}, types: {0:{type:{name: type}}}}) => ({name,id,image, type}))));
  }
  
  //terminal crashes if i made a one time call had to call per 100

 //getallpokemon(1,100).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(101,200).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(201,300).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(301,400).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(401,500).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(501,600).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(601,700).then(data => data.forEach(addPokemonToDb)).catch(console.error);
 //getallpokemon(701,800).then(data => data.forEach(addPokemonToDb)).catch(console.error);
