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

var userChoice = ["rock", "paper", "scissors"]

var computerChoice = ["rock", "paper" "scissors"]

// Need a variable to hold scores and add to each round
// 
// var userScore = 0;
// var computerScore = 0;
// var ties = 0


function playGame() {
    var userPlay = prompt("Do you want to play rock, paper, scissors?");
    var userPick = prompt("Please choose rock, paper or scissors")

    var userScore = 0;
    var computerScore = 0;
    var ties = 0;

    // Write loop to play if userPlay = true, then execute

    if userPlay
}














function getRandomChoice() {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}
