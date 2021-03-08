const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "pokedex"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "CREATE TABLE pokemon(id INT PRIMARY KEY NOT NULL,name VARCHAR(50),img VARCHAR(256))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("pokemon table created...");
  });
}),

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE type(id INT PRIMARY KEY NOT NULL,name VARCHAR(32))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("types table created...");
    });
}),

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    let sql = "CREATE TABLE poke_type(id INT PRIMARY KEY AUTO_INCREMENT,pokeId INT NOT NULL,typeId INT NOT NULL,FOREIGN KEY (pokeId) REFERENCES pokemon(id),FOREIGN KEY (typeId) REFERENCES type(id))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("mapping table created...");
    });

    con.end ()
});