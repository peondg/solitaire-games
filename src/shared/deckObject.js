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

// shuffleDeck function
export const shuffleDeck = (deck) => {
  let randomCard;
  let temp;
  for (let i = 0; i < deck.length; i++) {
    // Pick a random card position (0-51) and store into a variable.
    randomCard = Math.floor(Math.random() * 52);
    // Continue picking random cards until the card at the current position in the
    //   for loop is not the same as the position of the random one being picked.
    while (i === randomCard) {
      randomCard = Math.floor(Math.random() * 52);
    }
    // Swap the card at the current position in the for loop with the random one.
    // console.log(
    //   `Swapping ${i} : ${deck[i].image} => ${randomCard} : ${deck[randomCard].image}`
    // );
    temp = deck[i];
    deck[i] = deck[randomCard];
    deck[randomCard] = temp;
    // console.log(
    //   `New State: ${i} : ${deck[i].image} => ${randomCard} : ${deck[randomCard].image}`
    // );
    // console.log("-------------------------");
  }
  return deck;
};

// setupCardDeck Function - Arrow function
export function deckObject() {
  const newDeck = [];
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
    for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
      newDeck.push(new cardObject(ranks[rankIndex], suits[suitIndex]));
    }
  }
  return newDeck;
}
