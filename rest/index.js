const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// app.get('/v3', (req, res) => {

//     let sql = new Sql(`mysql://root:${password}@:3306/sample`);

//     let Users = sql.define('users', {
//         name:
//     })

//     Users.findAll()
//         .then(data => {
//             console.log(data);
//             return data
//         })
// })