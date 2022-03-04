//creo una variabile e la prendo dalla griglia grande
const gridElement = document.getElementById("grid");

//arrow function che restituisce un div 
const createSquare = () => {
    const currentGrid = document.createElement("div");
    currentGrid.classList.add("box");
    return currentGrid;
}
// ogni volta che premo il bottone mi crea  le griglie
document.getElementById('button').addEventListener('click', function () {
    //resetto prima
    gridElement.innerHTML = "";
    //inizializzo il valore una variabile prendendolo dall'id html(select)
    let grid = document.getElementById("input-grid").value;
    //se il select è uguale all'input che ho dato allora mi creo...
    if (grid == "easy") {
        for (i = 1; i <= 100; i++) {
            //creo una variabile uguale alla funzione
            const gridSquare = createSquare();
            //aggiungo il numero alla griglia
            gridSquare.innerHTML += [i];
            //appena premo un quadrato della griglia gli do un colore diverso(alternando con troggle)
            gridSquare.addEventListener('click', function () {
                this.classList.toggle('box-clicked');
            })
            //aggiungo un figlio lla griglia grande
            gridElement.appendChild(gridSquare);
        }
        //uguale ma meno i
    } else if (grid == "medium") {
        for (i = 1; i <= 80; i++) {
            const gridSquare = createSquare();
            gridSquare.innerHTML += [i];

            gridSquare.addEventListener('click', function () {
                this.classList.toggle('box-clicked');
            })
            gridElement.appendChild(gridSquare);

        }
    } else { //uguale ma meno i
        for (i = 1; i <= 50; i++) {
            const gridSquare = createSquare();
            gridSquare.innerHTML += [i];

            gridSquare.addEventListener('click', function () {
                this.classList.toggle('box-clicked');
            })
            gridElement.appendChild(gridSquare);

        }
    }
});