let mysql = require("mysql");

let con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "KillEric5050",
    database: "Pokedex"
})

con.connect(err => {
    if(err){
        throw err;
    }
    con.query("SELECT * FROM pokemon", (err, result, fields) =>{
        if(err){
            throw err;
        }
        console.log(result)

    })
});