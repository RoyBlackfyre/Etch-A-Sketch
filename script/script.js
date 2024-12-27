

for (let gridRow = 0; gridRow < 16; gridRow++) {
    const row = document.createElement("div")
    row.setAttribute("class","row")
    document.body.appendChild(row)
    for(let gridColumn = 0;gridColumn < 16; gridColumn++){
        const newDiv = document.createElement("div")
        newDiv.setAttribute("class","grid")
        row.appendChild(newDiv)
    }
}