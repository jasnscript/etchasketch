// grid functionality
const grid = document.querySelector('.grid');

window.addEventListener('load', initializeGrid);

function initializeGrid() {
    setGrid(16);
    fillGrid(16);
}

function setGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size*size; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        // add mouseover event listener
        pixel.addEventListener('mouseover', changeColor);
        grid.appendChild(pixel);
    }
}

// pixel decoration setting
let colorSetting = 'black';

const black = document.querySelector('#black');
black.addEventListener('click', changeColorBlack);
const rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click', changeColorRainbow);
const grayscale = document.querySelector('#grayscale');
grayscale.addEventListener('click', changeColorGray);

document.onkeyup = function(e) {
    if (e.key == 'b') {
        changeColorBlack();
    } else if (e.key == 'r') {
        changeColorRainbow();
    } else if (e.key == 'g') {
        changeColorGray();
    } else if (e.key == 'c') {
        clearGrid();
    }
}

function changeColor(e) {
    if (colorSetting == 'black') {
        e.target.style.backgroundColor = 'black';
        e.target.style.opacity = 1;
    } else if (colorSetting == 'rainbow') {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (colorSetting == 'grayscale') {
        e.target.style.backgroundColor = 'black';
        // convert e.target.style.opacity to a number so that we can perform addition
        let x = +e.target.style.opacity 
        // increase opacity by some amount
        x += 0.2;
        // convert it back to a string
        y = x.toString()
        // set e.target.opacity to that string
        e.target.style.opacity = y;
    }
}

function changeColorBlack() {
    colorSetting = 'black';
}
function changeColorRainbow() {
    colorSetting = 'rainbow';
}
function changeColorGray() {
    colorSetting = 'grayscale';
}

// clear and size button functionality
const clear = document.querySelector('#clear');
const size = document.querySelector('#size');

clear.addEventListener('click', clearGrid);
size.addEventListener('click', getNewSize);

function clearGrid() {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((one) => {
        one.style.backgroundColor = 'transparent';
    })
}

function changeSize(newSize) {
    const pixel = document.querySelectorAll('.pixel');
    pixel.forEach((one) => {
        grid.removeChild(one);
    });
    setGrid(newSize);
    fillGrid(newSize);
}

function getNewSize() {
    let newSize = prompt('Enter an integer from 2 to 64: ', 16);
    if (newSize == null) {
        return;
    } else {
        newSize = parseInt(newSize);

        if (isNaN(newSize) || newSize > 64 || newSize < 2) {
            alert('Not a valid input!');
            getNewSize();
        } else {
            changeSize(newSize);
        }
    }
}