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
let h1 = document.querySelector("h1");
  

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

optionOne.addEventListener('click', function(){
  optionOneScreen.style.display = "block";
  optionThree.style.display = "block";
  optionFour.style.display = "block";
});

optionThree.addEventListener('click', function(){
  optionThreeEnd.style.display = "block";
});

optionFour.addEventListener('click', function(){
  optionFourEnd.style.display = "block";
});

optionTwo.addEventListener('click', function(){
  optionTwoScreen.style.display = "block";
});

optionTwoScreen.addEventListener('dblclick', function(){
  optionTwoEnd.style.display = "block";
});

var sound = new Audio('alex-productions-lifestyle.mp3');
sound.play();
// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });