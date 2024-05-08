// Declare variables below to save the different divs of your story.
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen = document.querySelector(".option-two-screen");
let optionOne = document.querySelector(".option-one");
let optionTwo = document.querySelector(".option-two");
let optionTwoEnd = document.querySelector(".option-two-end");
let optionThree = document.querySelector(".option-three");
let optionThreeEnd = document.querySelector(".option-three-end");
let optionFour = document.querySelector(".option-four");
let optionFourEnd = document.querySelector(".option-four-end");
let buttons = document.querySelector(".buttons");
var sound1 = new Audio('success-1-6297.mp3');
var sound2 = new Audio('mixkit-sad-game-over-trombone-471.mp3');
var sound3 = new Audio('wrong-place-129242.mp3');
// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


optionOne.addEventListener('click', function(){
  sound1.play();
  optionOneScreen.style.display = "block";
  optionThree.style.display = "block";
  optionFour.style.display = "block";
});

optionThree.addEventListener('click', function(){
  optionThreeEnd.style.display = "block";
  sound1.play();
});

optionFour.addEventListener('click', function(){
  optionFourEnd.style.display = "block";
  sound2.play();
});

optionTwo.addEventListener('click', function(){
  optionTwoScreen.style.display = "block";
  sound2.play();
});

optionTwoScreen.addEventListener('dblclick', function(){
  optionTwoEnd.style.display = "block";
  sound3.play();
});

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });