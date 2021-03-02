 const Sequelize = require('Sequelize');
 const fetch = require('node-fetch');
 const PokemonModel = require('./models/pokemon');

 const connection = new Sequelize('pokedex', 'root', 'yourpassword', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  
  connection.query('show tables').then(console.log);


  function addPokemonToDb(data){
    
    const {name:pokename,id:pokeid,image} = data;
    
      connection.query(`INSERT INTO POKEMON (pokename, ID, sprites) VALUES ("${pokename}","${pokeid}","${image}")`);
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
      then( ({name,id, sprites:{front_default:image}}) => ({name,id,image}))));
  }

  getallpokemon(1,67).then(data => data.forEach(addPokemonToDb)).catch(console.error);

  getallpokemon(69,150).then(data => data.forEach(addPokemonToDb)).catch(console.error);

  