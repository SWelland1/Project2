// Game
let game = {
    cards: [],
    round: 0,
    currentCard: 0,
    previousCard: 0,
    gameStatus: "active"
};

/**
 * Game runs once DOM has finished loading
 * Event Listners and Button Elements Added
 * */

$(document).ready(function () {
    
// When Start Game button pressed Game Page starts a new game

    $('#start-game-button').click(function () {
        $('#start-page').addClass('hide');
        $('#game-page').removeClass('hide');
        newGame();
    });
    
//When Reset Game button is pressed new game restarts

    $('#modal-reset-game-button').click(function () {
        newGame();
    });

//When Higher or Lower button is pressed guess is submitted for the User

    $('#higher-button').click(function () {
        checkRound();
        checkGuess("higher");
    });

//Lower guess is submitted for the User when Lower button is pressed

    $('#lower-button').click(function () {
        checkRound();
        checkGuess("lower");
    });

//When Play Again button is pressed on the game page a new game starts

    $('#play-again-button').click(function () {
        $('#results-page').addClass('hide');
        $('#game-page').removeClass('hide');
        newGame();
    });
});

/**
 * When 'Start Game' and after 'Reset Game' and 'Play Again' button is pressed 'loop' in main game starts
 */

    function newGame() {
    
//Initial values set

    game.cards = [];
    game.round = 0;
    game.gameStatus = "active";

//Higher and Lower buttons active and instructions available for User

    $('#results-box').text('Press Higher or Lower to submit your guess!');
    $("#higher-button").removeAttr("disabled", "disabled").addClass("game-button-hover");
    $("#lower-button").removeAttr("disabled", "disabled").addClass("game-button-hover");
    
//Cards set to ?

    for (let i = 1; i < 5; i++) {
        $(`#card-${i}`).text("?").css('background-color', '#78ceeb');
    }

//Cards added to array, no duplicates and 5 random numbers generated between 0 and 20

    while (game.cards.length < 5) {
        let card = ((Math.floor(Math.random() * 16)));
        if (!game.cards.includes(card)) {
            game.cards.push(card);
        }
    }

//1st card in array value set

    $('#card-0').text(game.cards[0]);
    increaseRound();
}

/**
 * Round number increases by one from DOM 
 */

    function increaseRound() {
        game.round++;
    $("#round-number").text(game.round);
}

/**
 * Current and previous cards checked and comapred. Round number checked
 */

    function checkRound() {
        switch (game.round) {
            case 1:
                game.currentCard = game.cards[1];
                game.previousCard = game.cards[0];
                    break;
            case 2:
                game.currentCard = game.cards[2];
                game.previousCard = game.cards[1];
                    break;
            case 3:
                game.currentCard = game.cards[3];
                game.previousCard = game.cards[2];
                    break;
            case 4:
                game.currentCard = game.cards[4];
                game.previousCard = game.cards[3];
                     break;
    }
}

/**
 * Did User guess correctly
 */

    function checkGuess(userGuess) {
        
//Acive or inactive game, establishes if User can make a guess

    if (game.gameStatus === 'active') {

//If guess is Higher or Lower different code generated and activated

    if (userGuess === 'higher') {
            
//Player guess correct or incorrect depending if current card is greater than previous

    if (game.currentCard > game.previousCard) {

//Round number checked to see if User has completed the game or can move onto next round

    if (game.round < 4) {
                    
//Start of next round, round number increases and card changes to green
                    
    $("#results-box").text(`Correct! Round ${game.round} complete, guess again!`);
        $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'green');
            increaseRound();
                } else if (game.round === 4) {

//User moves to Results Page shown congratulation message

    $('#results-page').removeClass('hide');
    $('#game-page').addClass('hide');
            } else {
                $("#results-box").text("Invalid Round Press Reset Game");
                    }
            } else {
/*Game status inactive, Higher and Lower buttons disabled. User told guess incorrect and card changes to red*/
    $("#results-box").text("Incorrect! Press the 'Reset Game' to play again!");
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'red');
        game.gameStatus = "inactive";
    $("#higher-button").attr("disabled", "disabled").removeClass("game-button-hover");
    $("#lower-button").attr("disabled", "disabled").removeClass("game-button-hover");
            }
        } else if (userGuess === 'lower') {
            
//Is current card less than previous was the player correct or incorrect

        if (game.currentCard < game.previousCard) {
                
//Round number checked to see if User has completed the game or can move onto next round
        if (game.round < 4) {

//Round number increases User shown message round completed, card changes to green

    $("#results-box").text(`Correct! Round ${game.round} complete, guess again!`);
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'limegreen');
        increaseRound();
            } else if (game.round === 4) {
                    
//User moves to Results Page and shown congratulations message

    $('#results-page').removeClass('hide');
    $('#game-page').addClass('hide');
             } else {
                    $("#results-box").text("Invalid Round Press Reset Game");
                }
            } else {
//Higher and Lower buttons disabled, User told guess was incorrect and card changes to red*/

    $("#results-box").text("Incorrect! Press the 'Reset Game' to play again!");
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'red');
        game.gameStatus = "inactive";
            $("#higher-button").attr("disabled", "disabled").removeClass("game-button-hover");
            $("#lower-button").attr("disabled", "disabled").removeClass("game-button-hover");
            }
        } else {
            $("#results-box").text("Select either the higher or lower button to submit your guess");
        }
    } else {
        $("#results-box").text(`Press Reset Game to Play Again`);
    }
}