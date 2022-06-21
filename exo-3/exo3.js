// you can write js here
console.log('exo-3');


//fonction choix utilisateur
function getUserChoice(userInput) {
    this.userInput = userInput.toLowerCase();

    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
        return userInput
    } else {
        console.log('Error !!!!');
    }
}

//fonction choix ordinateur avec random
function getComputerChoice() {
    var choiceCP = Math.floor(Math.random() * 2);

    if (choiceCP == 0) {
        return 'rock';
    } else if (choiceCP == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//fonction qui défini le gagnant suite au choix fait
function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'Tied';
    } else if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        return 'Won';
    } else if (userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Lost';
    } else {
        return 'Won';
    }
}

//fonction qui lance le jeux
function playGame() {
    var uChoice = getUserChoice('scissors');
    var cChoice = getComputerChoice();

    console.log(determineWinner(uChoice, cChoice));
}

playGame();