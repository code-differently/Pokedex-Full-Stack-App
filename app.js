//const Sequelize = require('sequelize');

//const Sequelize = new Sequelize( {
//dialect: 'sqlite',
 //   storage: 'movies.db'

//});

//(async () => {

//}) ();

let mysql = require("mysql");

let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "pokedex"
});

con.connect(err => {
   if(err) {
    throw err;
}

let id = 2
    let name = "Pikachu"
    let img = "myurl2";

console.log(`INSERT INTO pokemon(id, name, img) VALUES (${id}, ${name}, ${img});`)

id = 3
    name = "Squirtle"
    img = "myurl3"

console.log(`INSERT INTO pokemon (id, name, img) VALUES (${id}, ${name}, ${img});`)

con.query("SELECT * FROM pokemon", err, result, fields) => {

con.query(`INSERT INTO pokemon (id, name, img) VALUES ("${id}", "${name}", "${img}")`,(err, result, fields) => {

if(err) 
throw err,


cons
)
