// cards.js
const CLUBS = 'clubs';
const HEARTS = 'hearts';
const DIAMONDS = 'diamonds';
const SPADES = 'spades';

const SUITS = [CLUBS, HEARTS, DIAMONDS, SPADES];

//The array position represents the card number
//So far A represents one positions
//Games like straight A2345 are not supported, only 10JQKA
const CARD_NAMES = [null, null, "two", "three", "four", "five", "six", "seven",
                    "eight", "nine", "ten", "jack", "queen", "king", "ace"];

//Init the deck
var cards = [];
//Fill the deck with the cards
SUITS.forEach(function(suit) {
  for (var i = 2; i <= 14; i++) {
      cards.push({value: i, name: CARD_NAMES[i], suit: suit})
  }
});

//shuffle function
function shuffle() {
    //Clone the array of cards
    var dealCards = cards.slice(0);

    for (var i = dealCards.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        var cardValue = dealCards[i - 1];
        dealCards[i - 1] = dealCards[j];
        dealCards[j] = cardValue;
    }
    return dealCards;
}

console.log(shuffle());
