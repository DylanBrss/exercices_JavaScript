// you can write js here
console.log('exo-3');

function getUserChoice(userInput){
    this.userInput = userInput.toLowerCase();

    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        console.log(userInput);
    }else{
        console.log('Error !!!!');
    }
    return userInput;
}

function getComputerChoice(){
    var choiceCP = Math.random(2);
    
    if(choiceCP = 0){
        return 'rock';
    } else if (choiceCP = 1){
        return 'paper';
    } else {
        return 'scissors';
    }

    return result;
}   

function determineWinner(userChoice, computerChoice){

    if(userChoice === computerChoice){
        return 'Tied';
    }else if(userChoice === 'rock' && computerChoice === "scissors"){
        return 'Won';
    }else if(userChoice === 'rock' && computerChoice === 'paper') {
        return 'Lost';
    }else if(userChoice === 'paper' && computerChoice === 'rock') {
        return 'Won';
    }else if(userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Lost';
    }else if(userChoice === 'scissors' && computerChoice === 'paper'){
        return 'Won';
    }else if(userChoice === 'scissors' && computerChoice === 'rock'){
        return 'Lost';
    }else {
        return 'Won'
    }
}

function playGame(){
 var uChoice = getUserChoice('paper');
 var cChoice = getComputerChoice();

 console.log(determineWinner(uChoice,cChoice));
}

console.log(playGame());