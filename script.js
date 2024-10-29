//Global variables
let playAgain = true;
alert ('Welcome to Rock paper Scissors league!');
let gameOptions = ['r', 'p', 's'];

function playerDecision() {
    playerChoice = prompt('Pick one: (R)ock, (P)aper, (S)cissors');
    //TODO: This should could probably be combined with something. Idea to drop this down a lower case entry for ease of error checking.
    playerChoice = playerChoice.toLowerCase();
    console.log(`INFO: Player chose ${playerChoice}`);

    //error check: Did the player choose something apart from the options provided?
    if (playerChoice === !gameOptions.includes){
        alert('That was not one of your options. Try again, please.')
    };
    return playerChoice;
};

// Main gameplay loop
while (playAgain === true){
    //Prompt the player
    playerDecision();
    playAgain = confirm('Do you wish to play again?');
    };