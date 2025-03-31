// select the (ID) #container div
const container = document.querySelector("#container");
console.log(container);

// create a 16x16 divs grid by using Flexbox
let row = 1;
let column = 1; 
const squareGrid = document.createElement("div");
squareGrid.setAttribute("style", "background-color: blue; height: 3.125%; aspect-ratio: 1/1;");
squareGrid.setAttribute("id", `(${row},${column})`);
console.log(squareGrid.getAttribute("id"));
//squareGrid.textContent = "Hello World!";

// Insert the squareGrid div into the #container div
container.appendChild(squareGrid);