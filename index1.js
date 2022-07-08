var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "DICE" + randomNumber1 +".png";
var imageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "DICE" + randomNumber2 +".png";
var imageSource = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource);


if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="player 1 win's...!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 win's...!";
}
else{
    document.querySelector("h1").innerHTML="tie...!";
}