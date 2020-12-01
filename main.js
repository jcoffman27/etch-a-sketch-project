const container = document.getElementById("container");
//Here we grab the div with the id container and give it a variable to save us from writing out document.getElementById("container"); every time we need it.


function makeRows(rows, cols) {//Here we declare a function that allows us to make rows and columns, with the parameters rows & cols.

//Here we set the property of our created --grid-rows/--grid-cols variable to the rows/cols parameters that we initialize in our function above. These variables are CSS variables that pass through the grid-template-rows/cols properties. So in short we create a way for our function parameters to sync up with our CSS.

  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
//Now we need to create a loop, create a div element and give it a variable name called cell or box, we then appends children elements for all 16 x 16 cells and also give each one a class name of grid-items.

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

//Lets initialize the function with 16 x 16 and test if everything appears as we need.
makeRows(16, 16);
//////////////////////////////////////////////////////////////
const cell = document.getElementsByClassName("grid-item");

for (var i = 0 ; i < cell.length; i++) {
    cell[i].addEventListener('mouseover' , function(e){
        e.target.style.backgroundColor = "black";
    }); 
 };


 function clearScreen(){
    const cell = document.getElementsByClassName("grid-item");
    for (var i = 0 ; i < cell.length; i++){
        cell[i].style.backgroundColor = "white";
    };
 };


function drawAgain(){
    const rows = prompt("How many rows would you like?");
    const cols = prompt("How many columns would you like?");
    return makeRows(rows,cols);
};


const btn = document.getElementById("btn");
btn.addEventListener("click", function(e){
    clearScreen();
    drawAgain();
});