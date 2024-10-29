//Global variables
let playAgain = true;
let gameOptions = ['r', 'p', 's'];
// flag to determine if the user has just started a new game.
let newGame = true;


sessionStatistics = {
    player : "",
    wins : 0,
    losses : 0,
    draw : 0,
    computerWins : 0,
    computerLoss : 0,
    computerDraw : 0,

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

// Main gameplay loop
while (playAgain === true){
    //made into functions for ease of troubleshooting/isolating logic.
    start();
    playerDecision();
    computerDecision();
    playAgain = confirm('Do you wish to play again?');
    };