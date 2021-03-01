const renderData = (data)=>{
    document.body.innerHTML = data.map(getHtml).join('<hr>')
}
const getHtml =({customerName,customerNumber})=>{
    return `<h1>${customerName}</h1> <h1>${customerNumber}</h1>`
}


fetch('http://localhost:3000/database')
    .then( res => res.json())
    .then(renderData);

