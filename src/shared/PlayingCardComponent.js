import { Component } from "react";

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

// Card class to be used thoughout the game to be able to easily update the image
// and objects store in multiple areas of the game.
class PlayingCardItem {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.cardString = `images/cards/${this.rank}_${this.suit}.jpeg`;
  }
}

// Setup Facedown card object to be used for "resetting the board"
const faceDownCard = new PlayingCardItem("face", "down");

// REACT SECTION ------------------------------- //

// PlayingCard - Class Component
class PlayingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <p>Playing Card here</p>
      </>
    );
  }
}

export { PlayingCard, PlayingCardItem, suits, ranks, faceDownCard };
