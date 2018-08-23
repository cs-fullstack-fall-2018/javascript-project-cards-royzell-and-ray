
const cards = [
    { cardNumber: 6, type: 'h' },
    { cardNumber: 9, type: 'd' },
    { cardNumber: 2, type: 'h' },
    { cardNumber: 9, type: 'h' },
    { cardNumber: 14, type: 'h' },
    { cardNumber: 6, type: 'c' },
    { cardNumber: 2, type: 'd' },
    { cardNumber: 9, type: 's' },
    { cardNumber: 12, type: 'h' },
    { cardNumber: 10, type: 'c' },
    { cardNumber: 14, type: 'c' },
    { cardNumber: 7, type: 'd' },
    { cardNumber: 3, type: 's' },
    { cardNumber: 8, type: 'd' },
    { cardNumber: 12, type: 's' },
    { cardNumber: 7, type: 's' },
    { cardNumber: 7, type: 'c' },
    { cardNumber: 14, type: 'd' },
    { cardNumber: 11, type: 'c' },
    { cardNumber: 10, type: 's' },
    { cardNumber: 11, type: 'd' },
    { cardNumber: 4, type: 'd' },
    { cardNumber: 2, type: 's' },
    { cardNumber: 7, type: 'h' },
    { cardNumber: 14, type: 's' },
    { cardNumber: 10, type: 'h' },
    { cardNumber: 5, type: 'c' },
    { cardNumber: 12, type: 'c' },
    { cardNumber: 6, type: 's' },
    { cardNumber: 5, type: 's' },
    { cardNumber: 12, type: 'd' },
    { cardNumber: 4, type: 'h' },
    { cardNumber: 11, type: 'h' },
    { cardNumber: 13, type: 'c' },
    { cardNumber: 5, type: 'h' },
    { cardNumber: 6, type: 'd' },
    { cardNumber: 13, type: 's' },
    { cardNumber: 13, type: 'd' },
    { cardNumber: 8, type: 'c' },
    { cardNumber: 4, type: 's' },
    { cardNumber: 13, type: 'h' },
    { cardNumber: 2, type: 'c' },
    { cardNumber: 8, type: 's' },
    { cardNumber: 10, type: 'd' },
    { cardNumber: 3, type: 'c' },
    { cardNumber: 3, type: 'h' },
    { cardNumber: 11, type: 's' },
    { cardNumber: 8, type: 'h' },
    { cardNumber: 9, type: 'c' },
    { cardNumber: 5, type: 'd' },
    { cardNumber: 3, type: 'd' },
    { cardNumber: 4, type: 'c' } ];

var player1Deck = [];
var player2Deck = [];
var player1points = 0;
var player2points = 0;

player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);

console.log(player1Deck);
console.log(player2Deck);

for(let x=0; x<4; x++){
    let player1Answer = player1Deck[x].cardNumber;
    let player2Answer = player2Deck[x].cardNumber;
    if(player1Answer<player2Answer){
        player1points += 1;
    }else{
        player2points += 1;
    }


}

if(player1points > player2points){
    alert("player 1 wins")
}else if(player2points > player1points){
    alert("player 2 wins")
}else{
    alert("tie")
}




var cards = new Array();
var typeArray = ["s", "d", "c", "h"];
var cardNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];

for(let i=0; i <typeArray.length; i++)
{
    for(let x=0; x <cardNumberArray.length; x++)
    {
        let card = {cardNumber: cardNumberArray[x], type: typeArray[i]};
        cards.push(card);
    }
}

for (var i=0; i < 10000; i++)
{
    let rand1 = Math.floor((Math.random() * cards.length));
    let rand2 = Math.floor((Math.random() * cards.length));
    let tmp = cards[rand1];
    cards[rand1] = cards[rand2];
    cards[rand2] = tmp;
}}


function game() {

    playerHand = cards.slice();
    playe2hand = cards.slice();

    var randomHand1 = Math.floor(Math.random() * playerHand);
    var randomHand2 = Math.floor(Math.random() * playe2hand);


    function Score() {

        var player1Score = 0;


        player1Score+=1;

        console.log(player1Score);


    }

    function score2() {

        var player2Score = 0 ;

        player2Score+=1;

        console.log(player2Score);

    }

    function winningConditions(){

        if (randomHand1.shift() > randomHand2) {

            var playerscore1 = 0;

            playerscore1 = playerscore1 + 1;

            console.log("Player1 Score: " + playerscore1);
        }

        if (randomHand1.shift() < randomHand2) {

            var playerscore2 = 0;

            playerscore2 = playerscore2 + 1;

            console.log("Player2 Score: " + playerscore2);
        }

        if (randomHand1.shift() === randomHand2) {

            console.log("Draw")
        }


    }

    function Winner() {
        //
        // if (randomHand1.shift() > randomHand2) {
        //     Score(player1Score, player2Score);
        //
        //     game();
        //
        // }
        //
        // else if (randomHand1.shift === randomHand2.shift) {
        //
        //     if (randomHand1.unshift() >
        // }

    }

}