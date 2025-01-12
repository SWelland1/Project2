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
 * and after Play Again or Reset Game buttons are pressed*/
function newGame() {
    game.cards=[];
    game.round=0;
    game.gameStatus='active';

//Starting Instructions for the user Higher and Lowe Buttons are enabled
$('#results-box').text('Click Higher or Lower to Submit your next Move!');
$('#higher-button').removeAttr("disabled","disabled").addClass('game-button-hover');
$('#lower-button').removeAttr("diabled","disabled");

//all values of the cards set to the value of ?
for(let i=1;i<5;i++) {
    $('#card-${i}`).text("?").css('background-color', #78ceeb');
    
}

//5 random numbers generated between 0-15, add them to the card array, no duplicates
while(game.cards.length<5);
    let card=((Math.floor(Math.randon()*16)));
    if(!game.cards.includes(card)) {
    game.cards.push(card)
};

//First card set to starting number in the card array
    $('#card-0').text(game.cards[0]);
    increaseRound();
}

/**DOM has current round number and increases by one*/
function increaseRound() {
    game.round++;
    $('#round-number').text(game.round);
}

//* Checks and assigns current and previous cars that need to be compared*/
switch(game.round) {
    case 1:
        game.currrentCard=game.cards[1];
        game.previousCard=game.cards[0];
        break;
    case 2:
        game.currrentCard=game.cards[2];
        game.previousCard=game.cards[1];
        break;
    case 3:
        game.currrentCard=game.cards[3];
        game.previousCard=game.cards[2];
        break;
    case 4:
        game.currrentCard=game.cards[4];
        game.previousCard=game.cards[3];
        break;
}

/**
 * Checks if user guessed correctly */
function checkGuess(userGuess){

//Is the game active or inactive, allows user to guess or not
    if(game.gameStatus==='active'){

//code changes depending on higher or lower guess is made
    if(userGuess==='higher'){

//Current card is checked to see if user is correct or incorrect, is card greather than previous
    if(game.currentCard>game.previousCard){

//Round number checked does the palyer move on or is the game complete
    if(game.round<4) {

//Round number increases and card turns green to show correct guess
    $('#result-box').text(`Correct Guess! Round ${game.round} completed, onto the next guess!`);
    $(`#card-${game.round}`).text(game.currentCard).css('background-color','limegreen');
    increaseRound();
} else if(game.round===4) {

// User is taken to the result page, Congratulations!
    $('#results-page').removeClass('hide');
    $('#game-page').addClass('hide');
} else {
    $('#results-box').text('Round Invalid Press Game Reset');

/* Card changes to red informing the user the guess was incorrect, status of game changed to inactive
user cannot make anymore guesses*/
    $('#results-box').text(Unlucky that is incorrect! Press 'Game Restart' to play again!);
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'red');
    game.gameStatus='inactive';
    $('#higher-button').attr('disabled','disabled').remoceClass('game-button-hover');
    $('#lower-button').attr('disabled','disabled').removeClass('game-button-hover');
}
} else if (userGuess==='lower'){
    
//Current card checked if less than previous User is either correct or incorect
    if(game.currentCard<game.previousCard) {

//Round number checked either player moves to next round or game is completed
    if(game.round<4){

//Round number increases and card changes to green informs User guess is correct
    $('#results-box').text("Thats is Correct, Round ${game.round} Complete, move onto the next round!");
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'limegreen');
    increaseRound();
{ else if(game.round===4) {

//User taken to Result Page and Congratulated!
    $('#results-page').remoceClass('hide');
    $('#game-page').addClass('hide');
} else {
    $('#results-box').text('Invalid Round Press Game Reset');
}
} else {

//Card changes to red informing the user the guess was incorrect, status of game changed to inactive 
// user cannot make anymore guesses
    $('#results-box').text('Unlucky that is incorrect! Press 'Game Restart' to play again!');
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'red');
    game.gameStatus='inactive';
    $('#higher-button').attr('disabled','disabled').removeClass('game-button-hover');
    $('#lower-button').attr('disabled','disabled').removeClass('game-button-hover');
}
    } else {
        $('#results-box').text('Make your guess Higher or Lower!');
    } else {
        $('#results-box').text(`Press Game Reset to Play Again`)
    }
    }
    }    
    }
    }
    }
