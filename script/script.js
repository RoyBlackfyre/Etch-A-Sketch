
const gridContainer = document.querySelector("#grid-container")
const generateGridButton = document.querySelector("#button-grid-generator")
const blackButton = document.querySelector("#button-black-fill")

document.body.addEventListener("click",(e)=>{
    if(e.target.id === "button-grid-generator"){
        const promptInput = prompt("Enter size of grid from 1 to 100")
        const gridSize = parseInt(promptInput)
        if(0<gridSize && gridSize<=100){
            gridContainer.innerHTML=""
            generateGrid(gridSize)
        } else {
            alert("Invalid Input")
        }
    }

    if(e.target.id === "button-black-fill"){
        fillBlack()
    }
})

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
    }
}

function fillBlack(){
    const gridObjects = document.querySelectorAll(".grid")

            gridObjects.forEach((grid)=>{
                grid.addEventListener("mouseenter",()=>{
                    grid.style.backgroundColor = "black"
                })
            })
}


