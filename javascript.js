// Populate 16x16 grid of square divs

const container = document.querySelector("#container");

for(i=0; i<16; i++) {
    var gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    container.append(gridRow);
    for (j=0;j<16;j++){
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
