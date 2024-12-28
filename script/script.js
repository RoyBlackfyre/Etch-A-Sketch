
const gridContainer = document.querySelector("#grid-container")
const generateGridButton = document.querySelector("#button-grid-generator")
const blackButton = document.querySelector("#button-black-fill")
const rainbowButton = document.querySelector("#button-rainbow-fill")
const resetButton = document.querySelector("#button-reset")

document.body.addEventListener("click",(e)=>{
    if(e.target === generateGridButton){
        const promptInput = prompt("Enter size of grid from 1 to 100")
        const gridSize = parseInt(promptInput)
        if(0<gridSize && gridSize<=100){
            gridContainer.innerHTML=""
            generateGrid(gridSize)
        } else {
            alert("Invalid Input")
        }
    }

    if(e.target === blackButton){
        fillBlack()
    }

    if(e.target.closest("#button-rainbow-fill")){
        fillRainbow()
    }

    if(e.target === resetButton){
        resetGrid()
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

function resetGrid(){
    const gridObjects = document.querySelectorAll(".grid")

            gridObjects.forEach((grid)=>{
                grid.style.backgroundColor = "white"
                grid.style.opacity = 0
            })
}

function fillBlack(){
    const gridObjects = document.querySelectorAll(".grid")

            gridObjects.forEach((grid)=>{
                grid.addEventListener("mouseenter",()=>{
                    const actualStyle = getComputedStyle(grid)
                    grid.style.opacity = parseFloat(actualStyle.opacity) +.1
                    grid.style.backgroundColor = "black"
                })
            })
}

function fillRainbow(){

    const gridObjects = document.querySelectorAll(".grid")
        
    gridObjects.forEach((grid)=>{
            grid.addEventListener("mouseenter",()=>{
                const actualStyle = getComputedStyle(grid)
                grid.style.opacity = parseFloat(actualStyle.opacity) +.1
                grid.style.backgroundColor = generateRandomColor()
            })
        })

}

function generateRandomColor(){
    const rainbowColors = ["red","orange","yellow","green","blue","indigo","violet"]
    let randomNumber = Math.floor(((Math.random()) * rainbowColors.length))
    return rainbowColors[randomNumber]
}




