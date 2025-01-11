// Game Object //
let game = {
    cards:[]
    currentCard:0,
    previousCard:0,
    gameStatus:"active"
};

/**
 * DOM to load before game starts running
 * Button Elements add event listeners
 */

$(document). ready(function() {
 //Display game page also start new game when button clicked
 $('#start-game-button').click(function() {
    $('#start-page').addClass('hide');
    $('#game-page').removeClass('hide');
    NewGame();
 });

//Game Restarts when Reset button is clicked
$'#modal-reset-game-button').click(function(){
    newGame();
});

//Higher guess by User when the Higher buttton is clicked
$('higher-button').click(function(){
    checkRound();
    checkGuess("higher");
});

//Lower guess by User when the Lower button is clicked
$('#lower-button').click(function() {
    checkRound();
    checkGuess("lower");
});

//Game page is displayed and new game is started when Play Again button is clicked
$('#play-again-button').click(function() {
    $('#results-page').addClass('hide');
    $('#game-page').removeClass('hide');
});

/**Loop for main game, when Start Game is pressed
 * and after Play Again or Reset Game buttons are pressed
*/
function newGame() {
    
}


