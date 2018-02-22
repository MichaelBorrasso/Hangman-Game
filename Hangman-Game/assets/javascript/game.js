var wordList = ["cat", "dog", "pig", "horse", "gorilla", "emu"];
var chosenWord = ""; //  Word chosen by computer
var chosenWordLetters = []; // chosenWordLetters split into an array
var numBlanks = 0; // number of dashes display # of characters in the chosenWord
var blankAndSuccessLetters = [];
var wrongGuesses = []; 

function startGame(){
 //  Word chosen by computer
  chosenWord = wordList [Math.floor(Math.random() * wordList.length)]; 
//    console.log(chosenWord)
// document.getElementById("chosenWord").textContent = chosenWord;
// console.log(chosenWord);
   // chosenWord letters split into an array 
chosenWordLetters = chosenWord.split("")
//  console.log(chosenWordLetters);
// # of dashes to be displayed = # of characters in the chosenWord
 numBlanks=chosenWordLetters.length;
//  console.log(numBlanks);
// empty array to reset game
blankAndSuccessLetters = []; 
// empty array to reset game
wrongGuesses = [];
for (var i=0; i< numBlanks;i++) {
blankAndSuccessLetters.push("-");

}
};



 




//


// window.onload = function () {

//     var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//           'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//           't', 'u', 'v', 'w', 'x', 'y', 'z'];

//           var buttons = function () {
//             myButtons = document.getElementById('buttons');
//             letters = document.createElement('ul');
        
//             for (var i = 0; i < letters.length; i++) {
//               letters.id = 'letters';
//               list = document.createElement('li');
//               list.id = 'letterList';
//               list.innerHTML = letters[i];
//               check();
//               myButtons.appendChild(letters);
//               letters.appendChild(list);
//             }
//           }
          
//           result = function () {
//             wordHolder = document.getElementById("guessWord");


//           document.getElementById('reset').onclick = function() {          