// hands.js
var cardLib = require('./cards');

const HIGH_CARD = 0;
const PAIR = 1;
const TWO_PAIR = 2;
const THREE_OF_A_KIND = 3;
const STRAIGHT = 4;
const FLUSH = 5;
const FULL_HOUSE = 6;
const FOUR_OF_A_KIND = 7;
const STRAIGHT_FLUSH = 8;
const ROYAL_FLUSH = 9;


// Returns the best hand from the given cards (between 2 and 7)
function getBestHand(cards) {
 var hand = getRoyalFlush(cards);

 if (!hand) {
   hand = getStraightFlush(cards);
 }

 if (!hand) {
   hand = getFourOfAKind(cards);
 }
 if (!hand) {
   hand = getFullHouse(cards);
 }

 if (!hand) {
   hand = getFlush(cards);
 }

 if (!hand) {
   hand = getStraight(cards);
 }

 if (!hand) {
   hand = getThreeOfAKind(cards);
 }

 if (!hand) {
   hand = getTwoPair(cards);
 }

 if (!hand) {
   hand = getPair(cards);
 }

 if (!hand) {
   hand = getHighCard(cards);
 }

 return hand;
}

//Returns the High card from the given array of cards
function getHighCard(cards) {
   var idx = -1;
   for (var i = 0; i < cards.length; i++) {
     if (cards[i].value > idx) {
       idx = i;
     }
 }
 return {value: HIGH_CARD, cards: [cards[idx]]};
}

function getRoyalFlush(cards) {
  var straightFlush = getStraightFlush(cards);
  if (!straightFlush) return null;
  if (cards[0].value == 'ten' && cards[4].value == 'ace') {
    return {value:ROYAL_FLUSH, cards:straightFlush.cards};
  }else {
    return null
  }
}

function getStraightFlush(cards) {
  var flush = getFlush(cards);
  var straigth = getStraight(cards);
  if (flush && straigth) {
    return {value:STRAIGHT_FLUSH, cards:flush.cards};
  }else {
    return null;
  }
}
