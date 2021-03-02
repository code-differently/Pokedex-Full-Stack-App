// let mysql = require("mysql");

// let con = mysql = mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password: "malakies2020",
//     database:"pokedex"
// });


// //Everytime we run a query
// con.connect(err => {
//     if(err){            //if there is an error connecting throw in that error
//         throw err;
//     }

//     let id = 2
//     let name = "Pikachu"
//     let img = "myurl2";

//     // console.log(`INSERT INTO pokeman (id, name, img) VALUES (${id}, ${name}, ${img});`)

//     id = 3
//     name = "Squirtle"
//     img = "myurl3"

//     // console.log(`INSERT INTO pokeman (id, name, img) VALUES (${id}, ${name}, ${img});`)

//     // con.query("SELECT * FROM pokeman", (err, result, fields) => { //this is being run as if it's in Mysql workbench, we can insert, delete, etc
//     con.query(`INSERT INTO pokeman (id, name, img) VALUES ("${id}", "${name}", "${img}")`, (err, result, fields) => {
//     if(err){
//             throw err;
//         }
//         console.log(result)
        
//     })
// });

// const Sequelize = require('sequelize');
// let sequelize = new Sequelize(`mysql://root:malakies2020@:3306/pokedex`);

// let Pokeman = sequelize.define('pokeman', {
//     id: Sequelize.INTEGER,
//     name: Sequelize.STRING,
//     img: Sequelize.STRING
// });

// Pokeman.sync({force: true}).then(function () {
//     Pokeman.create({
//     id: 1,
//     name: "Bulbasaur",
//     img: "myurl4"
//     })

// Users.findAll().then(console.log) //this finds all the records and console logs it

// })

app.get('/v3/pokemons', (req, res) => {
    const Sequelize = require('sequelize');
    let sequelize = new Sequelize(`mysql://root:malakies2020@:3306/pokedex`);

    let Pokeman = sequelize.define('pokeman', {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING,
    img: Sequelize.STRING
});
    Users.findAll()
    .then (data => {
        console.log(data);
        return data;
    })
    .then(data => res.send(data)) 

});