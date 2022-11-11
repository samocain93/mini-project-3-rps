// Steps
// 1. Create randomizer for computer to pick between rps -- done!
// 2. Make a compare function to determine user choice vs computer choice and have it return the winner based on outcome
// 3. Select winner and add to score
// 4. Have a user and computer score and have the score update after each turn

// var question = window.prompt("Do you want to play: rock, paper, scissors?", "Let's play!");

// var userChoice = window.prompt("Please choose: rock, paper or scissors");

// var computerChoices = ["rock", "paper", "scissors"];

// var x = computerChoices[Math.floor(Math.random() * computerChoices.length)]

// console.log(x)




// function game() {
//   for (let i = 0; i <= 5; i++){
//     playRound();
//   }
// }


var choices = ["rock", "paper", "scissors"];
var winners = [];


function playGame() {
  for (let i = 0; i < 5; i++){
  playRound();
  }
  showWins();
}


function playRound() {
  var playerSelection = playerChoice();
  var computerSelection = computerChoice();
  var winner = pickWinner(playerSelection, computerSelection)
  winners.push(winner);

}

function playerChoice() {
  //   will get the input from the player
  var input = prompt("Select: rock, paper, or scissors");
  while (input == null) {
    input = prompt("Please type rock, paper or scissors");
  }
  input = input.toLowerCase();

  let check = validateInput(input);
  while (check == false) {
    input = prompt("Please type: rock, paper or scissors");
    input = input.toLowerCase();
    check = validateInput(input);
  }
  while (input == null) {
    input = prompt("Please type: rock, paper or scissors");
  }
  input = input.toLowerCase();
  check = validateInput(input);
  return input;
}


function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  } else {
    return false;
  }
}

function pickWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissors") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissors" && choiceC === "paper")
  ) {
    return "Player Wins";
  } else{
    return "Computer Wins";
  }
}

function showWins(){
  let playerWins = winners.filter((item) => item == "Player";
  let computerWins = winners.filter((item) => item == "Computer");
  let ties = winners.filter((item) => item == "Tie");

}

playGame();
