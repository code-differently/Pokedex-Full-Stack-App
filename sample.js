let password = "0507198Four";


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })

let mysql = require('mysql');

async function getData() {
    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: password,
        database: "pokedex"
    });
};

let data = await new Promise((resolve, reject));

con.connect(err => {
    if (err) {
        throw err;
    }
    con.query("SELECT * FROM pokemon", (err, result, fields) => {
        if (err) {
            throw err;
        }
        console.log(result);
        return result;
        con.end();
    });
});


let data = getData();
console.log(data);


let pokemon_id = 1;
let name = "Bulbasaur";
let color = "Green";

//console.log(`INSERT into pokemon (pokemon_id, name, color) VALUES (${pokemon_id}, ${name}, ${color});`);
con.query(`INSERT into pokemon (pokemon_id, name, color) VALUES (${pokemon_id}, ${name}, ${color});`, (err, result, fields) => {
    if (err) {
        throw err;
    }
});