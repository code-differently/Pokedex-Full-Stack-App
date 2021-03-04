
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "linux5All##"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected to mysql!");
// });

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to mysql..");
  con.query("CREATE DATABASE DooBBkie", function (err, result) {
    if (err) throw err;
    console.log("Database pokedexter created...");
  });
});
