const cards = [
    {cardNumber: 6, type: 'h', image: '6H.png'},
    {cardNumber: 9, type: 'd', image: '9D.png'},
    {cardNumber: 2, type: 'h', image: '2H.png'},
    {cardNumber: 9, type: 'h', image: '9H.png'},
    {cardNumber: 14, type: 'h', image: 'AH.png'},
    {cardNumber: 6, type: 'c', image: '6C.png'},
    {cardNumber: 2, type: 'd', image: '2D.png'},
    {cardNumber: 9, type: 's', image: '9S.png'},
    {cardNumber: 12, type: 'h', image: 'QH.png'},
    {cardNumber: 10, type: 'c', image: '10C.png'},
    {cardNumber: 14, type: 'c', image: 'AC.png'},
    {cardNumber: 7, type: 'd', image: '7D.png'},
    {cardNumber: 3, type: 's', image: '3S.png'},
    {cardNumber: 8, type: 'd', image: '8D.png'},
    {cardNumber: 12, type: 's', image: 'QS.png'},
    {cardNumber: 7, type: 's', image: '7S.png'},
    {cardNumber: 7, type: 'c', image: '7C.png'},
    {cardNumber: 14, type: 'd', image: 'AD.png'},
    {cardNumber: 11, type: 'c', image: 'JC.png'},
    {cardNumber: 10, type: 's', image: '10S.png'},
    {cardNumber: 11, type: 'd', image: 'JD.png'},
    {cardNumber: 4, type: 'd', image: '4D.png'},
    {cardNumber: 2, type: 's', image: '2S.png'},
    {cardNumber: 7, type: 'h', image: '7H.png'},
    {cardNumber: 14, type: 's', image: 'AS.png'},
    {cardNumber: 10, type: 'h', image: '10H.png'},
    {cardNumber: 5, type: 'c', image: '5C.png'},
    {cardNumber: 12, type: 'c', image: 'QC.png'},
    {cardNumber: 6, type: 's', image: '6S.png'},
    {cardNumber: 5, type: 's', image: '5S.png'},
    {cardNumber: 12, type: 'd', image: 'QD.png'},
    {cardNumber: 4, type: 'h', image: '4H.png'},
    {cardNumber: 11, type: 'h', image: 'JH.png'},
    {cardNumber: 13, type: 'c', image: 'KC.png'},
    {cardNumber: 5, type: 'h', image: '5H.png'},
    {cardNumber: 6, type: 'd', image: '6D.png'},
    {cardNumber: 13, type: 's', image: 'KS.png'},
    {cardNumber: 13, type: 'd', image: 'KD.png'},
    {cardNumber: 8, type: 'c', image: '8C.png'},
    {cardNumber: 4, type: 's', image: '4S.png'},
    {cardNumber: 13, type: 'h', image: 'KH.png'},
    {cardNumber: 2, type: 'c', image: '2C.png'},
    {cardNumber: 8, type: 's', image: '8S.png'},
    {cardNumber: 10, type: 'd', image: '10D.png'},
    {cardNumber: 3, type: 'c', image: '3C.png'},
    {cardNumber: 3, type: 'h', image: '3H.png'},
    {cardNumber: 11, type: 's', image: 'JS.png'},
    {cardNumber: 8, type: 'h', image: '8H.png'},
    {cardNumber: 9, type: 'c', image: '9C.png'},
    {cardNumber: 5, type: 'd', image: '5D.png'},
    {cardNumber: 3, type: 'd', image: '3D.png'},
    {cardNumber: 4, type: 'c', image: '4C.png'}];

var player1Deck = [];
var player2Deck = [];
var player1points = 0;
var player2points = 0;
var executed = 0;
var playcount = 3;
var roundwins1 = 0;
var roundwins2 = 0;
var newGame = true;
var player1Answer;
var player2Answer;
var player1RoundScore = document.getElementById("player1RoundScore");
var player2RoundScore = document.getElementById("player2RoundScore")
var player1Card = document.getElementById("player1Card")
var player2Card = document.getElementById("player2Card")
var player1Score = document.getElementById("player1");
var player2Score = document.getElementById("player2");
var resetButton = document.getElementById("reset");
var playButton = document.getElementById("play");
var gameTypes = document.getElementsByClassName("type");
var board = document.getElementById("board");
var player1Bar = new ldBar("#player1Bar");
var player2Bar = new ldBar("#player2Bar");
var player1RoundAnswers = document.getElementById("1answers");
var player2RoundAnswers = document.getElementById("2answers");
var lower = document.getElementById("lower");
var higher = document.getElementById("higher")
var percentage;

player1Deck = cards.slice();
player2Deck = player1Deck.splice(1, 26);


playButton.addEventListener("click", game);
resetButton.addEventListener("click", reset);


function reset() {
    board.innerText = "Play War"
    playButton.disabled = false;
    player1Bar.set(0);
    player2Bar.set(0);
    player1Card.innerHTML = "<img src=" + "cardImages/PNG/red_back.png" + "\>";
    player2Card.innerHTML = "<img src=" + "cardImages/PNG/yellow_back.png" + "\>";

    executed = 0;
    lower.innerText = executed + 1;
    higher.innerText = playcount;
    roundwins1 = 0;
    roundwins2 = 0;
    player1Score.innerText = "Red: " + 0;
    player2Score.innerText = "Yellow: " + 0;
    player1RoundAnswers.innerText = "";
    player2RoundAnswers.innerText = "";
}

function game() {
    playButton.disabled = true;
    board.innerText = "..."
    player1RoundAnswers.innerText = "";
    player2RoundAnswers.innerText = "";
    console.log(playcount)
    player1Bar.set(0);
    player2Bar.set(0);


    if (executed < playcount) {
        player1points = 0;
        player2points = 0;
        randomize();

        let iterator = 0;
        lower.innerText = executed + 1;


        let plays = setInterval(function () {


            player1Answer = parseInt(player1Deck[iterator].cardNumber);
            let src1 = "cardImages/PNG/" + player1Deck[iterator].image;
            let src2 = "cardImages/PNG/" + player2Deck[iterator].image;

            player1Card.innerHTML = "<img src=" + src1 + "\>";
            player2Answer = parseInt(player2Deck[iterator].cardNumber);
            player2Card.innerHTML = "<img src=" + src2 + "\>";
            let redAnswer = player1Deck[iterator].image.substring(0, 2);
            let yellowAnswer = player2Deck[iterator].image.substring(0, 2);

            player1RoundAnswers.innerText += redAnswer + " ";
            player2RoundAnswers.innerText += yellowAnswer + " ";


            if (player1Answer > player2Answer) {
                player1points += 1;
                percentage = (player1points * 10);
                player1Bar.set(percentage);

                // player1RoundScore.innerText = player1points
            } else if (player2Answer > player1Answer) {
                player2points += 1;
                percentage = (player2points * 10);
                player2Bar.set(percentage);
                // player2RoundScore.innerText = player2points
            } else {
            }
            iterator++;
            if (iterator > 10) {

                playButton.disabled = false
                clearInterval(plays);
                if (player1points > player2points) {
                    roundwins1 += 1;
                    player1Score.innerText = "Red: " + roundwins1
                    executed += 1;
                    board.innerText = "RED WINS THIS BATTLE"


                } else if (player2points > player1points) {

                    roundwins2 += 1;
                    player2Score.innerText = "Yellow: " + roundwins2
                    executed += 1
                    board.innerText = "YELLOW WINS THIS BATTLE";
                } else {
                    board.innerText = "TIE"

                }

                if (executed >= playcount || (executed > playcount / 2 && (roundwins1 > playcount / 2 || roundwins2 > playcount / 2))) {
                    if (roundwins1 > roundwins2) {
                        board.innerText = "RED HAS WON THE WAR";
                        playButton.disabled = true;

                    } else {
                        board.innerText = "YELLOW HAS WON THE WAR";
                        playButton.disabled = true;

                    }
                }
            }


        }, 100);

        console.log("Here1")


    }
    // if(executed >= playcount || (executed > playcount/2 && !(roundwins1 === roundwins2))){
    //     if(roundwins1 > roundwins2){
    //         board.innerText="RED WINS THE GAME"
    //
    //     }else{
    //         board.innerText="YELLOW WINS THE GAME"
    //
    //     }
    // }
}


function randomize() {
    var cards = new Array();
    var typeArray = ["s", "d", "c", "h"];
    var cardNumberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    for (let i = 0; i < typeArray.length; i++) {
        for (let x = 0; x < cardNumberArray.length; x++) {
            let actualNumber = cardNumberArray[x];
            switch (cardNumberArray[x]) {
                case "J":
                    actualNumber = "11";
                    break;
                case "Q":
                    actualNumber = "12";
                    break;
                case "K":
                    actualNumber = "13";
                    break;
                case "A":
                    actualNumber = "14";
                    break;

            }


            let card = {
                cardNumber: actualNumber,
                type: typeArray[i],
                image: cardNumberArray[x] + typeArray[i].toUpperCase() + ".png"
            };
            cards.push(card);
        }
    }

    for (var i = 0; i < 10000; i++) {
        let rand1 = Math.floor((Math.random() * cards.length));
        let rand2 = Math.floor((Math.random() * cards.length));
        let tmp = cards[rand1];
        cards[rand1] = cards[rand2];
        cards[rand2] = tmp;

    }
    player1Deck = cards.slice();
    player2Deck = player1Deck.splice(1, 26);


}

var setGameType = function () {
    playcount = this.id
    reset()

}

for (var i = 0; i < gameTypes.length; i++) {
    gameTypes[i].addEventListener('click', setGameType, false);
}


// randomize();
// game();
// for (let x = 0; x < 4; x++) {
//     let player1Answer = player1Deck[x].cardNumber;
//     let src1 ="cardImages/PNG/" + player1Deck[x].image;
//     let src2 = "cardImages/PNG/" + player2Deck[x].image;
//     player1Card.innerHTML = "<img src="+ src1 +"\>";
//     let player2Answer = player2Deck[x].cardNumber;
//     player2Card.innerHTML = "<img src="+ src2 +"\>";
//
//
//
//     if (player1Answer < player2Answer) {
//         player1points += 1;
//         player1RoundScore.innerHTML = "<h1>"+player1points+"</h1>"
//     } else if(player2Answer < player1Answer) {
//         player2points += 1;
//         player2RoundScore.innerHTML = "<h1>"+player2points+"</h1>"
//     }
//
//
// }