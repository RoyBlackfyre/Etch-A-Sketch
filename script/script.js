
const gridContainer = document.querySelector("#grid-container")

function generateGrid(gridSize){

    for (let gridRow = 0; gridRow < gridSize; gridRow++) {
        const row = document.createElement("div")
        row.setAttribute("class","row")
        gridContainer.appendChild(row)

        for(let gridColumn = 0;gridColumn < gridSize; gridColumn++){
            const newDiv = document.createElement("div")
            newDiv.setAttribute("class","grid")
            row.appendChild(newDiv)
        }
        const gridObjects = document.querySelectorAll(".grid")

        gridObjects.forEach((grid)=>{
            grid.addEventListener("mouseenter",()=>{
                grid.style.backgroundColor = "black"
            })
        })
    }
}



