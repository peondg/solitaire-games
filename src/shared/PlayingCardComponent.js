import { Component } from "react";
import cardObject from "./cardObject";

// Setup Facedown card object to be used for "resetting the board"
const faceDownCard = new cardObject("face", "down");

// Card class to be used thoughout the game to be able to easily update the image
// and objects store in multiple areas of the game.
class PlayingCard extends Component {
  render() {
    return (
      <img
        width="70%"
        src={this.props.image}
        alt={`${this.props.rank} of ${this.props.suit}`}
      />
    );
  }
}

export { PlayingCard, faceDownCard };
