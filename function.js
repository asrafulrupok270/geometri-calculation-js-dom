function valueItem(id){
    const value = document.getElementById(id).value
    return value;

}
function areaText(id){

    const area = document.getElementById(id) 
    return area
}
function table(count,name,area){
    const table = areaText("tbody")
    const tr = document.createElement("tr")
    tr.innerHTML = `
    <td>${count}</td>
    <td>${name}</td>
    <td>${area}</td>
    <td> <button class="btn btn-primary px-4 py-2">convert</button></td>
    `
    table.appendChild(tr)
   
  
   
}
