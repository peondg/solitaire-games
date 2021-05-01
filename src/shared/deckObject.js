import cardObject from "./CardObject";

// Suits
const suits = ["spades", "clubs", "hearts", "diamonds"];

// Ranks
const ranks = [
  "ace",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "jack",
  "queen",
  "king",
];

class deckObject {
    constructor() {
      this.deck = setupCardDeck();
    }
    const setupCardDeck() {
        const deck = [];
        for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
          for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
            deck.push(new cardObject(ranks[rankIndex], suits[suitIndex]);
          }
        }
        return deck;
    }
}

export default deckObject;
