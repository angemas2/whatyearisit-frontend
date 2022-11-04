fetch("http://localhost:3000/year").then(response=>response.json()).then(data=>{

document.querySelector("#id").textContent=data.year

})