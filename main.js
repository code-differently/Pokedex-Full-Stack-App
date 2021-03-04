let mysql = require("mysql");

let con = mysql = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "pokedb"

  let uniqueType = new Set();
  data.forEach(pokemon => {
    pokemon.uniqueType.add(type);
  })
})
con.connect((err) => {
  if (err) {
    throw err;
  }
  con.query("SELECT * FROM pokemon", (err, result, fields) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});
