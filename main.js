let mysql = require("mysql");

let con = mysql = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database:"pokedex"
})


con.connect(err => {
    if(err){
        throw err;
    }
    con.query("SELECT * FROM pokemons", (err, result, fields) => {
        if(err){
            throw err;
        }
        console.log(result)

    })
});
con.end;
