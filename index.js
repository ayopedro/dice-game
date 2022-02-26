var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDice;

var image1 = document.querySelector(".img1").setAttribute("src", randomImageSource)



var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomImageSource > randomImageSource2){
document.querySelector("h1").innerText = "Player 1 wins!"
} else if (randomImageSource2 > randomImageSource){
  document.querySelector("h1").innerText = "Player 2 wins!"
} else{
  document.querySelector("h1").innerText = "Draw"
}

// var randomNumber1 = (Math.floor(Math.random()*6))+1;
// var randomNumber2 = (Math.floor(Math.random()*6))+1;
//
// document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
// document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
