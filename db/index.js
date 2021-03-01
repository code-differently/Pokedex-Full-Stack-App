const mysql = require("mysql");

const connectionDb = mysql.createPool({
  //allows queries
  connectionLimit: 10,
  password: "Pakistan@777",
  user: "root",
  database: "Pokedex",
  host: "localhost",
});

let pokeDb = {};

pokeDb.all = () => {
  return new Promise((resolve, reject) => {
    connectionDb.query(`SELECT * FROM Pokemon`, (err, results) => {
      if (err) {
        return reject(err); // Error Handling
      }
      return resolve(results); // Results from DB
    });
  });
};

module.exports = pokeDb;