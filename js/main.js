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

var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId1, cardId2) {
	
	console.log("User flipped " + cards[cardId1].rank)
	console.log(cards[cardId1].cardImage)
	console.log(cards[cardId1].suit)
	console.log("User flipped " + cards[cardId2].rank)
	console.log(cards[cardId2].cardImage)
	console.log(cards[cardId2].suit)
	cardsInPlay.push(cards[cardId1].rank)
	cardsInPlay.push(cards[cardId2].rank)
	checkForMatch()
	
}

flipCard(0, 2);


