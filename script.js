// Create 16x16 grid of square divs

const container = document.querySelector('.container');
const gridSquare = document.createElement('div');
gridSquare.setAttribute('id', 'theGrid')

for (let i = 0; i < 256; i++) {
    container.appendChild(gridSquare.cloneNode(true))
};

