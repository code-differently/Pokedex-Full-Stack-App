const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "pokedex"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "CREATE TABLE pokemon( pokeid INT PRIMARY KEY, name VARCHAR(20),img VARCHAR(266))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("pokemon table created...");
  });
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE types(pokeid INT,typeid INT PRIMARY KEY,typeName VARCHAR(266))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("types table created...");
    });
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE mapping(mappingid INT PRIMARY KEY AUTO_INCREMENT, pokeid INT, typeid INT, FOREIGN KEY (pokeid) REFERENCES pokemon(pokeid),FOREIGN KEY (typeid) REFERENCES types(typeid))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("mapping table created...");
    });

    con.end ()
});