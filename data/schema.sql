let mysql = require(‘mysql’);
let con = mysql = mysql.createConnection({
    host: “localhost”,
    user: “root”,
    password: Jordan2017,
    database: “Pokemon”
});
con.connect(err => {
    if (err) {
        throw err;
    }
    con.query(“SELECT * FROM pokemon”, (err, result, fields) => {
        if (err) {
            throw err;
        }
        console.log(result);
    });
});
let pokemon_id = 1;
let name = “Bulbasaur”;
let color = “Green”;
//console.log(`INSERT into pokemon (pokemon_id, name, color) VALUES (${pokemon_id}, ${name}, ${color});`);
con.query(`INSERT into pokemon (pokemon_id, name, color) VALUES (${pokemon_id}, ${name}, ${color});`, (err, result, fields) => {
    if (err) {
        throw err;
    }
});
-- 9:00
-- ALTER USER ‘root’@‘localhost’ IDENTIFIED WITH mysql_native_password BY ‘password’;
-- 9:00
-- FLUSH PRIVILEGES;
