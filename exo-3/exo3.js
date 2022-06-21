// you can write js here
console.log('exo-3');

var userInput = prompt('Quelle est ton chois?').toLowerCase();
var list = ['paper','scissors','rock'];
var userChoise = getUserChoice(userInput);
var computerChoise = getComputerChoice();

//fonction choix utilisateur
function getUserChoice(userInput) {

    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
        return 'L\'utilisateur a choisi : ' + userInput;
    } else {
        console.log('Error !!!!');
    }
}

//fonction choix ordinateur avec random
function getComputerChoice() {
    var ChoiseCP = list[Math.floor(Math.random() * 2)];
	return 'L\'ordinateur a choisi : ' + ChoiseCP;
}

//fonction qui défini le gagnant suite au choix fait
function determineWinner(userChoise, computerChoise) {

    if (userChoise === computerChoise) {
        return 'Tied';
    } else if (userChoise === 'paper' && computerChoise === 'rock') {
        return 'Won';
    } else if (userChoise === 'rock' && computerChoise === 'scissors') {
        return 'Won';
    } else if (userChoise === 'scissors' && computerChoise === 'paper') {
        return 'Won';
    } else {
        return 'Lost';
    }
}

//fonction qui lance le jeux
function playGame() {
    console.log(determineWinner(userChoise, computerChoise));
}

console.log(userChoise);
console.log(computerChoise);
playGame();