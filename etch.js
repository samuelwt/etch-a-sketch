// select the (ID) #container div
const container = document.querySelector("#container");
console.log(container);

// create a 16x16 divs grid by using Flexbox
let row;
let column;
// Use an array to store all these divs
const grids = [];
// Grid ID starts on base-1 (not base-0)
// make sure to set a class for each of the children divs - for hovering purposes
for (i = 1; i < (16*16)+1; i++) {
    // check which row we're in
    row = Math.ceil(i/16);
    // check which column we're in 
    column = i - (row-1)*16;
    // Use the grids array to store divs
    grids[i-1] = document.createElement("div");
    grids[i-1].setAttribute("style", "background-color: cornsilk; height: 25px; aspect-ratio: 1/1; border: 1px solid black");
    grids[i-1].setAttribute("id", `(${row},${column})`);
    grids[i-1].setAttribute("class", "squareGrids");
    console.log(grids[i-1].getAttribute("id"));
    container.appendChild(grids[i-1]);
};

// collate all the divs with querySelectorAll
const squareGrids = document.querySelectorAll('.squareGrids');

squareGrids.forEach(squareGrid => {
    squareGrid.addEventListener('mouseenter', () => {
        // What happens when the mouse enters (hovered)
        squareGrid.classList.add('hovered');
        // The next line needs to contain all attributes, kalo ga - the boxes will be gone.
        squareGrid.setAttribute("style", "background-color: red; height: 25px; aspect-ratio: 1/1; border: 1px solid black");
    });
});