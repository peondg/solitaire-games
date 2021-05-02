import cardObject from "./cardObject";

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

// setupCardDeck Function - Arrow function
export default function deckObject() {
  const newDeck = [];
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
      newDeck.push(new cardObject(ranks[rankIndex], suits[suitIndex]));
    }
  }
  return newDeck;
}
