console.log("Up and Running!");
//Matching the cards//
/* Assign variables to designated cards
Assign cards face images
Flip the cards over
If cards match leave them face up
If cards don't match flip them back */
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
]

var cardOne = cards[0];
var cardTwo = cards[2];


var cardsInPlay = [];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

function numberOfCards() {
	this.setAttribute('src', cards[cardId].cardImage)
	if (cardsInPlay.length > 2) {
		console.log("Pick another card")
	} else {
	}
}


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard() {
	var cardId = this.getAttribute('data-id');
	
	/*console.log("User flipped " + cards.rank)
	console.log(cards.cardImage)
	console.log(cards.suit)
	cardsInPlay.push(cards.rank)
	checkForMatch()*/
	
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cards[i] = document.getElementById('game-board').appendChild(cardElement);
		
	}
	 
			
		}
	


createBoard();


