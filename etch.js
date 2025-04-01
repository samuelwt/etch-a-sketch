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
    grids[i-1].setAttribute("style", "background-color: cornsilk; height: 60px; aspect-ratio: 1/1; border: 1px solid black");
    grids[i-1].setAttribute("id", `(${row},${column})`);
    grids[i-1].setAttribute("class", "squareGrids");
    console.log(grids[i-1].getAttribute("id"));
    container.appendChild(grids[i-1]);
};

// Let's build a reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {
    // What happened when the reset button is clicked. 
    squareGrids.forEach(squareGrid => {
        squareGrid.setAttribute("style", "background-color: cornsilk; height: 60px; aspect-ratio: 1/1; border: 1px solid black");
    });
});

// Create New Grid
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener('click', () => {
    const gridNum = prompt("If the number of squares in the grid is NxN, key in N (max 100):");
    if (gridNum > 100) {
        alert("You keyed in a number greater than 100!");
    } else {
        // delete previous divs
        const divsToRemove = document.querySelectorAll(".squareGrids")
        divsToRemove.forEach(squareGrid => {
            squareGrid.remove();
        });
        // build new divs
        const width = Math.floor((990-gridNum*2)/gridNum);
        for (i = 1; i < (gridNum*gridNum)+1; i++) {
            // check which row we're in
            row = Math.ceil(i/gridNum);
            // check which column we're in 
            column = i - (row-1)*gridNum;
            // Use the grids array to store divs
            grids[i-1] = document.createElement("div");
            grids[i-1].setAttribute("style", `background-color: cornsilk; height: ${width}px; aspect-ratio: 1/1; border: 1px solid black`);
            grids[i-1].setAttribute("id", `(${row},${column})`);
            grids[i-1].setAttribute("class", "squareGrids");
            console.log(grids[i-1].getAttribute("id"));
            container.appendChild(grids[i-1]);
        };

        // collate all the divs with querySelectorAll
        const squareGrids = document.querySelectorAll('.squareGrids');

        // the etch-a-sketch logic
        squareGrids.forEach(squareGrid => {
            squareGrid.addEventListener('mouseenter', () => {
                // What happens when the mouse enters (hovered)
                squareGrid.classList.add('hovered');
                // The next line needs to contain all attributes, kalo ga - the boxes will be gone.
                squareGrid.setAttribute("style", `background-color: red; height: ${width}px; aspect-ratio: 1/1; border: 1px solid black`);
            });
        });

        const resetButton = document.querySelector("#reset");
        resetButton.addEventListener('click', () => {
            // What happened when the reset button is clicked. 
            squareGrids.forEach(squareGrid => {
            squareGrid.setAttribute("style", `background-color: cornsilk; height: ${width}px; aspect-ratio: 1/1; border: 1px solid black`);
            });
        });
    };
});

// collate all the divs with querySelectorAll
const squareGrids = document.querySelectorAll('.squareGrids');

// the etch-a-sketch logic
squareGrids.forEach(squareGrid => {
    squareGrid.addEventListener('mouseenter', () => {
        // What happens when the mouse enters (hovered)
        squareGrid.classList.add('hovered');
        // The next line needs to contain all attributes, kalo ga - the boxes will be gone.
        squareGrid.setAttribute("style", "background-color: red; height: 60px; aspect-ratio: 1/1; border: 1px solid black");
    });
});