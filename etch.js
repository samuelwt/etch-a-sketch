// select the (ID) #container div
const container = document.querySelector("#container");
console.log(container);

// create a 16x16 divs grid by using Flexbox
let row;
let column;
// Use an array to store all these divs
const grids = [];
// Grid ID starts on base-1 (not base-0)
for (i = 1; i < (16*16)+1; i++) {
    // check which row we're in
    row = Math.ceil(i/16);
    // check which column we're in 
    column = i - (row-1)*16;
    // Use the grids array to store divs
    grids[i-1] = document.createElement("div");
    grids[i-1].setAttribute("style", "background-color: cornsilk; height: 25px; aspect-ratio: 1/1; border: 1px solid black");
    grids[i-1].setAttribute("id", `(${row},${column})`);
    console.log(grids[i-1].getAttribute("id"));
    container.appendChild(grids[i-1]);
}
//const squareGrid = document.createElement("div");
//squareGrid.setAttribute("style", "background-color: blue; height: 3.125%; aspect-ratio: 1/1;");
//squareGrid.setAttribute("id", `(${row},${column})`);
//console.log(squareGrid.getAttribute("id"));
//squareGrid.textContent = "Hello World!";

// Insert the squareGrid div into the #container div
container.appendChild(squareGrid);