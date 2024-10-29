//Global variables
let playAgain = true;
let gameOptions = ['r', 'p', 's'];
// flag to determine if the user has just started a new game.
let newGame = true;


sessionStatistics = {
    player : "",
    playerWins : 0,
    playerLosses : 0,
    draw : 0,
    computerWins : 0,
    computerLoss : 0

}

// functions
// There's probably a more elegant way of doing this, but for now... it works.
function start() {
    if (newGame === true){
        sessionStatistics.player = prompt("What is your name?")
        // TODO: If cancel is selected, stop the game.
        console.log(`INFO: Player name logged: ${sessionStatistics.player}`);
        newGame = false;
    };


};

function playerDecision() {
    playerChoice = prompt('Pick one: (R)ock, (P)aper, (S)cissors');
    // TODO: If Cancel is selected, stop the game entirely.
    playerChoice = playerChoice.toLowerCase();
    console.log(`INFO: Player chose ${playerChoice}`);

    //error check: Did the player choose something apart from the options provided?
    if (playerChoice === !gameOptions.includes){
        alert('That was not one of your options. Try again, please.')
    };
    return playerChoice;
};

function computerDecision () {
//Possible Bug: Could this ever return undefined? Running this code about 15 times doesn't seem to indicate that happens, but...) 
    min = 0;
    max = gameOptions.length;
    randNumber = Math.floor(Math.random() * (max - min));
    computerChoice = gameOptions[randNumber]
    console.log(`INFO: Computer chose ${computerChoice}`);
    return computerChoice;
}

function scoring () {
    //TODO: ugly... should be refactored
    // Make a logging function for this? Too much repeated code.
    // Need to see if there's a way to simplify this with maybe a switch statement or combining conditions. For now, this should work.
    // This needs a few more tests, but initial draft seems ok.
    console.log(`Player choice is ${playerChoice} and Computer Choice is ${computerChoice}`);
    if (playerChoice === computerChoice) {
        sessionStatistics.draw++;
        console.log(`Draw! Draw count is now ${sessionStatistics.draw}`)
    }else if (playerChoice === 'r' && computerChoice === 's') {
        sessionStatistics.playerWins++
        console.log (`Player chose ${playerChoice} and computer chose ${computerChoice} Point awarded to Player. Score: ${sessionStatistics.playerWins}`);
    }else if (playerChoice === 'r' && computerChoice === 'p'){
        sessionStatistics.computerWins++
        console.log (`Player chose ${playerChoice} and computer chose ${computerChoice} Point awarded to Player. Score: ${sessionStatistics.computerWins}`);
    }else if (playerChoice === 'p' && computerChoice === 'r') {
        sessionStatistics.playerWins++
        console.log (`Player chose ${playerChoice} and computer chose ${computerChoice} Point awarded to Player. Score: ${sessionStatistics.playerWins}`);
    }else if (playerChoice ==='p' && computerChoice === 's' ) {
        sessionStatistics.computerWins++
        console.log (`Player chose ${playerChoice} and computer chose ${computerChoice} Point awarded to Player. Score: ${sessionStatistics.computerWins}`);
    }else if (playerChoice === 's' && computerChoice === 'r') {
        sessionStatistics.computerWins++
        console.log (`Player chose ${playerChoice} and computer chose ${computerChoice} Point awarded to Player. Score: ${sessionStatistics.computerWins}`);
    }else if (playerChoice === 's' && computerChoice === 'p') {
        sessionStatistics.playerWins++
        console.log (`Player chose ${playerChoice} and computer chose ${computerChoice} Point awarded to Player. Score: ${sessionStatistics.playerWins}`);
    }

};
// Main gameplay loop
while (playAgain === true){
    //made into functions for ease of troubleshooting/isolating logic.
    start();
    playerDecision();
    computerDecision();
    scoring();
    playAgain = confirm('Do you wish to play again?');
    };