var cards = require('../cards');

describe('cards', () => {
 it('has 52 cards', () => {
   expect(cards.cards.length).toEqual(52);
 });
}
