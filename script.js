// Create 16x16 grid of square divs as the default size of the etch-a-sketch pad

let sideOfSquare = 16;

const container = document.querySelector('.container');
const gridSquare = document.createElement('div');

gridSquare.setAttribute('id', 'theGrid')

// Function Let user input a new value for each side of the etch-a-sketch pad

function makeGrid(sideOfSquare) {
    for (let i = 0; i < (sideOfSquare ** 2); i++) {
        container.appendChild(gridSquare.cloneNode(true))
}};


function changeTheGrid() {
    const changeColor = document.querySelectorAll('#theGrid');
    
    changeColor.forEach(square => {
        square.addEventListener('mouseover', () => 
            square.style.backgroundColor = 'purple')
    })

    changeColor.forEach(square => 
        square.style.width = `${(1 / sideOfSquare * 100)}%`)
    
    changeColor.forEach(square => 
        square.style.height = `${(1 / sideOfSquare * 100)}%`)    
}

makeGrid(sideOfSquare)
changeTheGrid()


const grid = document.querySelectorAll('#theGrid');
const resetButton = document.querySelector('.userInput');

resetButton.addEventListener('click', () => {
    sideOfSquare = prompt("Please enter the number of squares per side (max 100)", '');
    if (sideOfSquare > 100) {
            sideOfSquare = 100;
}
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    makeGrid(sideOfSquare);
    changeTheGrid()
})



