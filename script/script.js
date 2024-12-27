
const gridContainer = document.querySelector(".grid-container")

function generateGrid(){
    for (let gridRow = 0; gridRow < 4; gridRow++) {
        const row = document.createElement("div")
        row.setAttribute("class","row")
        gridContainer.appendChild(row)
        for(let gridColumn = 0;gridColumn < 16; gridColumn++){
            const newDiv = document.createElement("div")
            newDiv.setAttribute("class","grid")
            row.appendChild(newDiv)
        }
    }
}

const gridObjects = document.querySelectorAll(".grid")

gridObjects.forEach((grid)=>{
    grid.addEventListener("mouseenter",()=>{
        grid.style.backgroundColor = "black"
    })
})

