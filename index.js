
//create variable to to store colors names
var buttonColours = ["red", "blue", "green", "yellow"];

//create this variable for storing random colors
var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

//this is for one time any key press 
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//whole clicking on button 
$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });

//generating random numbers 
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}
//for animating random color
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}
//for playing sound on each color
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



function refreshPage(){
    window.parent.location = window.parent.location.href;
}