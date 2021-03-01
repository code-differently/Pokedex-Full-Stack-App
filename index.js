const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function getRandomDoggiePic(){
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
      if(this.readyState === 4 && this.status === 200){
          document.getElementById("doggie").src = this.responseText;
      }
  }

  xhr.open("GET", "http://localhost:4000/dog/random")
  xhr.send();
}