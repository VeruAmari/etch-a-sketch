
function createCanvas (n){
    /*
    Takes a given n number and creates a grid
    of (n squares) * (n rows) divs and inserts
    them in the .container.
    */
    let container = document.querySelector(".container");

    for (let i = 0; i < n; i++) {
        let subcontainer = document.createElement('div');
        subcontainer.setAttribute('class', 'row')
        
        for (let j = 0; j < n; j++) {
            let div = document.createElement('div');
            div.setAttribute('class', 'square')
            subcontainer.appendChild(div);
        }

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

createCanvas(50);
activateDrawing();