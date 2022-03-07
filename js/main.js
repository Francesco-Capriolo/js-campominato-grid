//funzione per creare una nuova griglia
function createGame() {
    //prima bisogna resettare ogni volta che si crea una nuova griglia
    document.querySelector("#grid").innerHTML = "";
    //recupero il livello selezionato
    document.getElementById("input-level").value;
    // prima di generare le varie celle devo assegnare una variabile
    // da poter dare le varie gradezze in maniera omogenea
    let cellsNumber = 0;
    let cellsRow = 0;
    //generare i vari tipi di livello con lo switch
    switch (input - level) {
        case easy:
            cellsNumber = 100;
            //^ oppure fare cellsRow=10;
            break;
        case medium:
            cellsNumber = 81;
            //^ oppure fare cellsRow=9;
            break;
        case hard:
            cellsNumber = 49;
            //^ oppure fare cellsRow=7;
            break;
    }
    //$ sqrt significa la radice quadrata di cellsNumber
    cellsRow = Math.sqrt(cellsNumber);

    /*  for(let i=0;i<cellsNumber;i++){
        createSquare(i);
     } */
}

//arrow function che restituisce un div 
function createSquare(currentGrid, cellsRow) {
    //creo un elemento
    const currentGrid = document.createElement("div");
    //aggiungo il css box
    currentGrid.classList.add("box");
    //aggiungo lo stile e mi calcolo la width
    currentGrid.style.width = `calc(100% / ${cellsRow})`;
    //la height è uguale alla width
    currentGrid.style.height = currentGrid.style.width;
    //inserisco il numero della cella
    currentGrid.innerHTML += [i];
    // restituisce il valore
    return currentGrid;
}

document.getElementById("button").addEventListener("click", function () {
    createGame()


})

















/*                 creare griglie con for            */

/* //creo una variabile e la prendo dalla griglia grande
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
    let grid = document.getElementById("input-level").value;
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
        for (i = 1; i <= 81; i++) {
            const gridSquare = createSquare();
            gridSquare.innerHTML += [i];

            gridSquare.addEventListener('click', function () {
                this.classList.toggle('box-clicked');
            })
            gridElement.appendChild(gridSquare);

        }
    } else { //uguale ma meno i
        for (i = 1; i <= 49; i++) {
            const gridSquare = createSquare();
            gridSquare.innerHTML += [i];

            gridSquare.addEventListener('click', function () {
                this.classList.toggle('box-clicked');
            })
            gridElement.appendChild(gridSquare);

        }
    }
}); */