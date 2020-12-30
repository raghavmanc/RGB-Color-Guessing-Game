var numOfSquares = 6;
var colors = generateColors(numOfSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("h1");
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var colorDisplay = document.getElementById("colorDisplay");

//New Colors Button
resetButton.addEventListener("click", function(){
	colors = generateColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";

	for(var i=0; i< squares.length; i++)
	{
	squares[i].style.backgroundColor = colors[i];
	}
	header.style.backgroundColor = "steelblue";

})

for(var i=0; i< squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(pickedColor);
			header.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!"
		}
	})
}


colorDisplay.textContent = pickedColor;

function changeColors(color){
	for(var i =0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColors(num){
	var arr = [];
	for(var i=0; i< num; i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Easy Mode
easyBtn.addEventListener("click", function(){
	numOfSquares = 3
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	header.style.backgroundColor = "steelblue";
	for(var i =0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

// Hard Mode
hardBtn.addEventListener("click", function(){
	numOfSquares = 6;
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	colors = generateColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	header.style.backgroundColor = "steelblue";
	for(var i =0; i<squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}

});