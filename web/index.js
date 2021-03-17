const colors = [
    ["normal", "#A8A77A"],
    ["fire", "#EE8130"],
    ["water", "#6390F0"],
    ["electric", "#F7D02C"],
    ["grass", "#7AC74C"],
    ["ice", "#96D9D6"],
    ["fighting", "#C22E28"],
    ["poison", "#A33EA1"],
    ["ground", "#E2BF65"],
    ["flying", "#A98FF3"],
    ["psychic", "#F94487"],
    ["bug", "#A6B91A"],
    ["rock", "#BA136"],
    ["ghost", "#735797"],
    ["dragon", "#6F35FC"],
    ["dark", "#705746"],
    ["steel", "#B7B7CE"],
    ["fairy", "#D685AD"]
 ]
let cardType;
let xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:3000/")

xhr.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
      
      let data = JSON.parse(this.responseText);
      for ( let i = 0 ; i < data.length ; i++ ) {
          for ( let j = 0 ; j < colors.length; j++) {
              if (colors[j][0] === data[i][0].type) {
                  cardType = colors[j][1];                }
          }
          document.getElementById('container').innerHTML += `
                  <div class="card" style="background-color: ${cardType}">
                  <h1>${data[i][0].name}, #${data[i][0].id}</h1>
                  <img src="${data[i][0].img}">  
              </div> 
          `;
      }
  }
}

xhr.send();


    // const renderData = (data) => {
    //     document.getElementById("pokemon").innerHTML = data.map(getHtml).join("");
    // }
    
    // const getHtml = ({pokeName, id, img, pokeType}) => {
    //     return `<div><h1>${pokeName}, ${id}, ${pokeType}</h1><img src="${img}"></div>`
    // }