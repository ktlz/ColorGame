let numSquares = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let result = document.getElementById("result");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                result.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                result.textContent = "Try again";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color trom array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"; 
    result.textContent = "";

    //change colors of squares
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
});

function changeColor(color) {
    //loop through squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an arr
    let arr = [];
    //add num random colors to array
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    //return that arr
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};