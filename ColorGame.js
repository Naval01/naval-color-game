	var colorList;
	var pickedColor;
	var noOfBoxes = 6;
	var square = document.querySelectorAll(".square");
	var resultDisplay = document.querySelector("#result");
	var header = document.querySelector("h1");
	var winningColor =document.querySelector("#winningColor");
	var playAgain =document.querySelector("#playAgain");
	var restart =document.querySelector("#restart");
	var easy =document.querySelector("#easy");
	var hard =document.querySelector("#hard");
	
	restart.addEventListener("click" ,newGame);
	easy.addEventListener("click" ,function(){
		noOfBoxes = 3;
		hard.classList.remove("selected");
		easy.classList.add("selected");
		newGame();
	});
	hard.addEventListener("click" ,function(){
		noOfBoxes = 6;
		easy.classList.remove("selected");
		hard.classList.add("selected");
		newGame();
	});
	newGame();


function resetColor(){
	for (var i = 0; i < square.length; i++) {
	// Initialize background color
		if (colorList[i]) {	
			square[i].style.display = "";
			square[i].style.backgroundColor = colorList[i];
		}
		else{
			square[i].style.display = "none";
		}

	// Set Listeners for squares
	square[i].addEventListener("click" ,checkWin);
	};
	pickedColor = pickColor();
};

function checkWin(){
	if (this.style.backgroundColor === pickedColor)
	{
		result.textContent = "Correct "
		for (var i = 0; i < colorList.length; i++) {
			square[i].style.backgroundColor = pickedColor;
		}
		header.style.backgroundColor = pickedColor;
		restart.textContent = "Play Again";

	}
	else{
		this.style.backgroundColor = "#232323"
		result.textContent = "Try Again";
	}
};

function pickColor(){
	var x= Math.random();
	x= x*colorList.length;	
	x = Math.floor(x);
	winningColor.textContent = colorList[x];
	return (colorList[x]);
}

function generateRandomColorArr(num){
	var arr= [];
	for (var i = 0; i < num; i++) {
		arr[i] = generateRandomColor();
	}
	return arr;
}

function generateRandomColor(){
	// Choose Red Value
		var red = Math.random();
		red = red*256;
		red = Math.floor(red);
	// Choose Green Value
		var green = Math.random();
		green = green*256;
		green = Math.floor(green);
	// Choose Blue Value
		var blue = Math.random();
		blue = blue*256;
		blue = Math.floor(blue);
	//return string
	return("rgb(" + red + ", " + green + ", " + blue + ")");
}

function newGame(){
	colorList = generateRandomColorArr(noOfBoxes);
	resetColor();
	header.style.backgroundColor = "steelblue";
	restart.textContent = "New Colors?"
	result.textContent = ""
}