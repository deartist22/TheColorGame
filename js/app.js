var colors = [
	"rgb(255,0,0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".squares");
var pickerColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickerColor;

for(var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		//grab color of clicked square
		clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			alert("Correct!")
		} else {
			alert("Wrong!")
		}
	})
}