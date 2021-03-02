let whatever = "0507198Four";



















const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
let mysql = require('mysql');

let con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: whatever,
    database: "classicmodels"
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/pokemon", (req, res) => {
    //let pokeData = await getPokeData();
    con.connect(err => {
        if (err) {
            throw err;
        }
        con.query("SELECT * FROM customers", (err, result, fields) => {
            if (err) {
                throw err;
            }
            console.log(result);
            res.send(result);
            //return result;
            //con.end();
        });
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})