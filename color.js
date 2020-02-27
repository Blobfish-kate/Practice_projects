let numSquares = 6;
let colors = [];
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	for(i=0; i<modeButtons.length; i++){
		//add click listeners to buttons
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
	for(i=0; i<squares.length; i++) {
		//add click listeners to squares
		squares[i].addEventListener ("click", function(){
			//grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again";
			}

		})
	};
	reset();
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors?";
	//pick new random color from arr
	//change colors of squares
	for(i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	};
	h1.style.backgroundColor = "steelblue";
};

resetButton.addEventListener("click", function(){
	//generate all new colors
	reset();
});

function changeColors(color) {
	//loop through all squares
	for (i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num) {
	//make an array
	//add num random colors to array
	let arr = [];
	for (i=0; i<num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	//pick a "red", "green", "blue" from 0 to 255
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}