import { Component } from "react";
import cardObject from "./cardObject";

// Setup Facedown card object to be used for "resetting the board"
const faceDownCard = new cardObject("face", "down");

// Card class to be used thoughout the game to be able to easily update the image
// and objects store in multiple areas of the game.
class PlayingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <img
          src={this.state.image}
          alt={`${this.state.rank} of ${this.state.suit}`}
        />
      </>
    );
  }
}

export { PlayingCard, faceDownCard };
