var numSquares=6;
var colors = generateRandomColors(numSquares);
var square=document.querySelectorAll(".square");
var messageDisplay=document.getElementById("message");
var pickedColor= pickColor();
var resetButton=document.getElementById("reset");
colorDisplay=document.getElementById("colorDisplay");
var h1=document.querySelector("h1");
colorDisplay.textContent=pickedColor;
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++)
{
    modeButtons[i].addEventListener("click",function () {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        if(this.textContent==="Easy")
        {
            numSquares=3;
        }
        else{
            numSquares=6;
        }
        reset();
        //figure out how many squares to show
        //pick new colors
        //pick a picked color
        //update page to reflect changes
    })
}
function reset() {
    //generate random colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor= pickColor();
    resetButton.textContent="New Colors";
    //change colorDisplay to match picked colors
    colorDisplay.textContent=pickedColor;
    messageDisplay.textContent='';
    //change colors of squares
    for(var i=0;i<square.length;i++)
    { //add initial colors to squares
        if(colors[i])
        {   square[i].style.display="block";
            square[i].style.backgroundColor=colors[i];
        }
        else
        {
            square[i].style.display="none";
        }
        }
    h1.style.backgroundColor="steelblue";

}

resetButton.addEventListener("click",function () {
   reset();
});

for(var i=0;i<square.length;i++)
{ //add initial colors to squares
    square[i].style.backgroundColor=colors[i];
    //add event listeners to squares
    square[i].addEventListener("click",function () {
        //grab the color
    var clickedColor=this.style.backgroundColor;
        //compare it to picked color
        if(clickedColor===pickedColor)
        {   resetButton.textContent="Play Again!";
            messageDisplay.textContent="Correct";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else
        {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }

    });
}
function changeColor(color)
{//loop through all squares
    for(var i=0;i<square.length;i++)
    {
        //change each color to match picked color
        square[i].style.backgroundColor=color;
    }
}
function pickColor() {
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr=[];
    //repeat num times
    for(i=0;i<num;i++)
    {
        //get random colors and push into array
        arr.push(randomColor());

    }
    return arr;
}
function randomColor() {
    //pick red from 0-255
    var r=Math.floor(Math.random()*256);
    //pick blue from 0-255
    var b=Math.floor(Math.random()*256);
    //pick red
    // from green from 0-255
    var g=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}