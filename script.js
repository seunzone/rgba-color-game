var numSqr = 6;
var colors = generateRandomColors(numSqr);
	var squares = document.querySelectorAll(".square");

	var pickedColor = pickColor();
	var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSqr = 3;
    colors = generateRandomColors(numSqr);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
    }
   
});

hardBtn.addEventListener("click", function(){
 
        easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSqr = 6;
     colors = generateRandomColors(numSqr);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
       
            squares[i].style.display = "block";
        }
});






resetButton.addEventListener("click", function(){
   colors = generateRandomColors(numSqr); 
    var pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";
    messageDisplay.textContent = "";
    
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = steelblue;
});


colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
        //add initial colors to squares
		squares[i].style.background = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of picked square
            var clickedColor = this.style.background;
            //compare to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Yay! Correct";
                resetButton.textContent = "Play Again!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else{
                this.style.background = "#232323";
                messageDisplay.textContent = "Wrong, Try Again";
            }
        });
	}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
         //change square to match given color
        squares[i].style.background = color;
    }
}
function pickColor(){
  var random =  Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr =[]
    for (var i = 0; i< num; i++){
        arr.push(randomColor());
        
    }
      return arr;
}
    function randomColor(){
    var r =    Math.floor(Math.random() * 256);
    var g =    Math.floor(Math.random() * 256);
    var b =    Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")";
        
    }
  