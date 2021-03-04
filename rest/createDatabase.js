const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "linux5All##"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE pokedex", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });

    con.end()
});

