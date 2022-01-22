// Create 16x16 grid of square divs

const container = document.querySelector('.container');
const gridSquare = document.createElement('div');
gridSquare.setAttribute('id', 'theGrid')

for (let i = 0; i < 256; i++) {
    container.appendChild(gridSquare.cloneNode(true))
};

const grid = document.querySelectorAll('#theGrid');

grid.forEach(square => {
    square.addEventListener('mouseover', () => square.style.backgroundColor = 'purple')
})