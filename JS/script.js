// Objective of the Game//
    let game = {
        cards: [],
        round: 0,
        currentCard: 0,
        previousCard: 0,
        gameStatus: "active"
    };

/** DOM finished loading before game starts, button elements and add event listeners*/

    $(document).ready(function () {
    
//New Game starts when button is pressed, Game page displayed//
    
    $('#start-game-button').click(function () {
        $('#start-page').addClass('hide');
        $('#game-page').removeClass('hide');
        newGame();
    });
    
// Game Restarted when reset game button in modal pressed //
    
    $('#modal-reset-game-button').click(function () {
        newGame();
    });

// Players guess is submitted when Higher or Lower button is clicked //
    
    $('#higher-button').click(function () {
        checkRound();
        checkGuess("higher");
    });

// Players guess submitted //
    
    $('#lower-button').click(function () {
        checkRound();
        checkGuess("lower");
    });

// Game Page displayed, New Game started when Play Again button pressed //
    
    $('#play-again-button').click(function () {
        $('#results-page').addClass('hide');
        $('#game-page').removeClass('hide');
        newGame();
    });
});

/** Loop for Main Game started when 'Start Game' button is clicked and after 'Play Again and Reset Game' buttons clicked */
    
    function newGame() {
    
// Key Value of Game Objects and Values //
    
    game.cards = [];
    game.round = 0;
    game.gameStatus = "active";
    
// Starting Instructions given to Player, Higher and Lower buttons Activated //
    
    $('#results-box').text('Press Higher or Lower to submit your guess!');
    $("#higher-button").removeAttr("disabled", "disabled").addClass("game-button-hover");
    $("#lower-button").removeAttr("disabled", "disabled").addClass("game-button-hover");

// Card Values - ? //
    
    for (let i = 1; i < 5; i++) {
        $(`#card-${i}`).text("?").css('background-color', '#000000');
    }

// 5 Random Numbers between 0 and 20, No duplicates, adding them to the cards array 
    
    while (game.cards.length < 5) {
        let card = ((Math.floor(Math.random() * 21)));
        if (!game.cards.includes(card)) {
            game.cards.push(card);
        }
    }

// First Card value set to first number in card array //
    
    $('#card-0').text(game.cards[0]);
    increaseRound();
}

/** Current Round number obtained from DOM, increase by one */

    function increaseRound() {
    game.round++;
    $("#round-number").text(game.round);
}

/** Compare cards from current and previous round */

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

/** Check if Players guess is correct */

    function checkGuess(userGuess) {

// Is game active or inactive decides whether the Player is able to make a guess //
    
    if (game.gameStatus === 'active') {
        
// Different code used for Higher or Lower guess // 
        
    if (userGuess === 'higher') {
            
// Is Player correct or incorrect depending if current card is greater than previous //
            
    if (game.currentCard > game.previousCard) {
                
//Checks whether Player has completed game or move onto next round //
                
    if (game.round < 4) {
                    
//Card turns Green and increases round number showing start of next round //
    
    $("#results-box").text(`Correct! Round ${game.round} complete, guess again!`);
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'limegreen');
    increaseRound();
         } else if (game.round === 4) {
                   
// Player taken to result Page //

    $('#results-page').removeClass('hide');
    $('#game-page').addClass('hide');
        } else {
            $("#results-box").text("Invalid Round Press Reset Game");
                }
        } else {
                
/* Card turns red Player is incorrect, inactive game status disables Higher and Lower buttons */
    
    $("#results-box").text("Incorrect! Press the 'Reset Game' to play again!");
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'red');
    game.gameStatus = "inactive";
    $("#higher-button").attr("disabled", "disabled").removeClass("game-button-hover")
    $("#lower-button").attr("disabled", "disabled").removeClass("game-button-hover");
            }
        } else if (userGuess === 'lower') {
           
//Current card checked to see if guess was correct or incorrect if current card is less than previous card //
            
    if (game.currentCard < game.previousCard) {
                
//Round number checked decides if Player has completed the game or moves onto next round //
                
    if (game.round < 4) {
                    
// Card changed to green round completed moves onto nextr round and increases round number //
                    
    $("#results-box").text(`Correct! Round ${game.round} complete, guess again!`);
    $(`#card-${game.round}`).text(game.currentCard).css('background-color', 'limegreen');
    increaseRound();
        } else if (game.round === 4) {
        
// Player taken to results page //
    
    $('#results-page').removeClass('hide');
    $('#game-page').addClass('hide');
        } else {
            $("#results-box").text("Invalid Round Press Reset Game");
                }
            } else {
            
// Card changed to Red guess is incorrect game status inactive higher and lower buttons disabled */
                
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