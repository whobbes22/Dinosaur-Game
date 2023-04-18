import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Dinosaur from './dino.js';
// import WeatherService from './weather-service.js';

class HangMan{
  constructor(word){
    this.secretWord = word;
    this.secretLength = word.length;
    this.guessArray = word.split("");
    this.resultArray = [];
  }

  // trex
  // ["t", r e x]
  buildResultsArray(){
    for(let i = 0; i< this.secretLength;i++){
      this.resultArray.push("");
    }
  }

  findLetter(guess){
    this.guessArray.forEach((element,index) => {
      if(element.includes(guess)){
        this.resultArray[index] = guess;
      }
    });
  }
}


// buisness
function getDino(){
  let promise = Dinosaur.getDino();
  promise.then(function(printGame){
    playGame(printGame);
  }, function(errorArray){
    printError(errorArray);
  });
}

// ui

let hangman; // global Variable

function playGame(apiDinosaur){
  const dino = apiDinosaur[0][0][0];
  hangman = new HangMan(dino);
  hangman.buildResultsArray();
  document.querySelector("#showResponse").innerText = dino;
}

function printError(request,apiDinosaur){
  document.querySelector("#showResponse").innerText = `request for API not fufillled ${request} ${apiDinosaur}`;
}




function handleFormSubmission(event){
  event.preventDefault();
  getDino();
}

function updateGameState(hangmanDisplay){
  document.querySelector("#actualResponse").innerText = hangmanDisplay.resultArray;
}

function handleLetterSubmission(event){
  event.preventDefault();
  const guess = document.querySelector("#letter").value;
  //const word = document.querySelector("#showResponse").value;
  console.log(word);
  hangman.findLetter(guess);
  updateGameState(hangman);
}



window.addEventListener("load", function(){
  document.querySelector("#startGame").addEventListener("click",handleFormSubmission);
  document.querySelector("#submitLetter").addEventListener("click",handleLetterSubmission);
});



/*
Things to do:

// ui 
update instruction on how to play
need an input text box for player
need to reveal answers to player
need to show guess counter and how many bad guess
need a lose / win screen

//buisness
need to count how many guesses
seperate dinosaur word into array
need to find each index of correct guess


*/