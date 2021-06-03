let n = 32;

const grid = document.querySelector('.grid');
const verticalGridLines = document.createElement('div');
const horizontalGridLines = document.createElement('div');

verticalGridLines.classList.add('verticalDiv');
horizontalGridLines.classList.add('pixel');

verticalGridLines.setAttribute('style', 'display: flex; flex-direction: column; width: 100%; height: 100%');
horizontalGridLines.setAttribute('style', ' width: 100%; height: 100%');

createGrid();

const pixel = document.querySelectorAll('.pixel');
pixel.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.style.backgroundColor = 'black';
    });
});

function createGrid() {
    for (let i = 0; i < n; i++) {
        addVerticalGridLines();
    }
    const verticalDiv = document.querySelectorAll('.verticalDiv');
    for (let j = 0; j < n; j++) {
        addHorizontalGridLines(verticalDiv);
    }
}

function addVerticalGridLines() {
    grid.appendChild(verticalGridLines.cloneNode(true));
}

function addHorizontalGridLines(verticalDiv) {  
    verticalDiv.forEach((division) => {
        division.appendChild(horizontalGridLines.cloneNode(true));
    });
}
