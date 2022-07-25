// random number from 1 - 6
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

// dice1.png to dice6.png
var randomDice = "dice" + randomNumber1 + ".png"; 

// random image source
var randomImageSource = "/images/" + randomDice;

// left hand image
var img1 = document.querySelector(".img1").setAttribute("src", randomImageSource);

//right hand image
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "/images/" + "dice" + randomNumber2 + ".png";

var img2 = document.querySelector(".img2").setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 won";
}else{
    document.querySelector("h1").innerHTML= "Draw";
}