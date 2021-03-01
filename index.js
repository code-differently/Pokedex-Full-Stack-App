const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

let mysql = require('mysql');

let con = mysql = mysql.createConnection({
    host: "localhost",
    user: "pokedex",
    password: "whatever",
    database: "pokedex"
});