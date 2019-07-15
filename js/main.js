console.log("Up and Running!");
//Matching the cards//
/* Assign variables to designated cards
Assign cards face images
Flip the cards over
If cards match leave them face up
If cards don't match flip them back */
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

function flipCard(cardId1, cardId2) {
	
	console.log("User flipped " + cards[cardId1])
	console.log("User flipped " + cards[cardId2])
	cardsInPlay.push(cards[cardId1])
	cardsInPlay.push(cards[cardId2])
	checkForMatch()
	
}

flipCard(0, 2);

