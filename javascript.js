
function createCanvas (n){
    /*
    Takes a given n number and creates a grid
    of (n squares) * (n rows) divs and inserts
    them in the .container.
    */
    let container = document.querySelector(".container");
    let dimensions = (80 / n);
    for (let i = 0; i < n; i++) {
        let subcontainer = document.createElement('div');
        subcontainer.setAttribute('class', 'row')
        
        for (let j = 0; j < n; j++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'square')
            div.setAttribute('style', `min-width: ${dimensions}vmin; min-height: ${dimensions}vmin;`)
            subcontainer.appendChild(div);
        }
        //subcontainer.setAttribute('style', `max-width: ${dimensions}dvh; max-height: ${dimensions}dvh;`)
        container.appendChild(subcontainer);
    }
};

function activateDrawing () {
    /*
    Adds event listeners to all squares, making them
    change color on hover by toggling a class
    */
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        return square.addEventListener('mouseover', () => {
            square.classList.toggle('active'); 
        });
    });
};

function deleteCurrentCanvas() {
    let container = document.querySelector(".container");
    let rows = document.querySelectorAll(".row");
    rows.forEach((row)=>{
        container.removeChild(row);
    })
};

function newCanvas() {
    deleteCurrentCanvas();
    let canvasSize = Number(prompt('Type a number for canvas size'));
    createCanvas(canvasSize);
    activateDrawing();
};


createCanvas(16);
activateDrawing();

let restart = document.querySelector('.restart');
restart.addEventListener('click', () => newCanvas());

