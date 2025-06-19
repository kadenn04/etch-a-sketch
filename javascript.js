// Populate 16x16 grid of square divs

const container = document.querySelector("#container");

function createGrid(size) {
    for(i=0; i<size; i++) {
        var gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        container.append(gridRow);
        for (j=0;j<size;j++){
            var gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.append(gridSquare);
        }
    }

    const gridSquares = document.querySelectorAll("div.grid-square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () =>  {
            square.style.backgroundColor = "red";
        });
        square.addEventListener("mouseover", () => {
            console.log("HI!");
        });
    });
}

function deleteGrid() {
    var gridSquares = document.querySelectorAll("div.grid-square");
    gridSquares.forEach((square) => {
        square.remove();
    })
    var gridRows = document.querySelectorAll("div.grid-row");
    gridRows.forEach((row) => {
        row.remove();
    })
}


function resetGrid() {
    var newSize = Number(prompt("Number of squares per side for the new grid:", 16));
    console.log(newSize);
    if (newSize == 0 || newSize == NaN) {
        return;
    } else {
        deleteGrid();
        createGrid(newSize);
    }

}

const promptButton = document.querySelector("#prompt-button");
promptButton.addEventListener("click", resetGrid);

createGrid(16);
