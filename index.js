'use strict';

document.addEventListener('DOMContentLoaded', () => {

let board =document.querySelector("#board")
let width = 15;
let height = 15;

function createSquares(){
    let squares = width * height;
    for(let i = 0; i < squares; i++){
        let square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover",() => setRandomColor(square))
        square.addEventListener("mouseleave",() => removeColor(square))
        board.append(square);
    
    }


}

function setRandomColor(square){
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;

    square.style.backgroundColor = `rgb(${r},${g},${b})`
}
createSquares();

function removeColor(square) {
 square.style.backgroundColor = "rgb(29, 29, 29)";



}


});








