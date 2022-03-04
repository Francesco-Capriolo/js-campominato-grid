const gridElement = document.getElementById("grid");

let miniCard = [];

let easyGrid = document.querySelector("button");

//arrow function che restituisce un div 
const createSquare = () => {
    const currentGrid = document.createElement("div");
    currentGrid.classList.add("box");
    return currentGrid;
}


for (i = 1; i <= 100; i++) {
    const gridSquare = createSquare();
    gridSquare.innerHTML += [i];

    gridSquare.addEventListener('click', function () {
        this.classList.toggle('box-clicked');
    })
    gridElement.appendChild(gridSquare);

}

/* for (i = 1; i <= 80; i++) {
    const gridSquare = createSquare();

    gridSquare.addEventListener('click', function () {
        this.classList.toggle('box-clicked');
    })
    gridElement.appendChild(gridSquare);

} */

/* for (i = 1; i <= 50; i++) {
    const gridSquare = createSquare();

    gridSquare.addEventListener('click', function () {
        this.classList.toggle('box-clicked');
    })
    gridElement.appendChild(gridSquare);

} */