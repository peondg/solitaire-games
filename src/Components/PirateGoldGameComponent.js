import { Button, Container, Row, Col } from "reactstrap";
import { Component } from "react";
import deckObject from "../shared/deckObject";
import { PlayingCard } from "../shared/PlayingCardComponent";

// PirateGoldGame class Component
class PirateGoldGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuit: false,
      showPlay: true,
      deck: deckObject(),
    };
  }
  handleQuitButton = () => {
    this.setState({
      showQuit: false,
      showPlay: true,
    });
    this.displayCards();
  };
  handlePlayButton = () => {
    this.setState({
      showQuit: true,
      showPlay: false,
    });
    this.shuffleDeck([...this.state.deck]);
  };
  // Helper JS Function to pick a random card for index between 0 and 51 (for 52 card deck)
  pickRandomCard = () => {
    return Math.floor(Math.random() * 52);
  };
  // shuffleDeck function
  shuffleDeck = (deckCopy) => {
    let randomCard = -1;
    let temp = -1;
    for (let i = 0; i < deckCopy.length; i++) {
      // Pick a random card position (0-51) and store into a variable.
      randomCard = this.pickRandomCard();
      // Continue picking random cards until the card at the current position in the
      //   for loop is not the same as the position of the random one being picked.
      while (i === randomCard) {
        randomCard = this.pickRandomCard();
      }
      // Swap the card at the current position in the for loop with the random one.
      temp = i;
      deckCopy[i] = deckCopy[randomCard];
      deckCopy[randomCard] = deckCopy[temp];
    }
    this.setState({ deck: deckCopy });
  };
  // Function to log to the console the cards in the array after shuffling.
  // Used for testing purposes only.
  displayCards = () => {
    for (let i = 0; i < this.state.deck.length; i++) {
      console.log(
        `${i}: ${this.state.deck[i].rank} of ${this.state.deck[i].suit}`
      );
    }
  };
  render() {
    return (
      <div>
        <Container>
          <Row className="mt-5 mb-5">
            <Col>
              <PlayingCard
                rank={this.state.deck[0].rank}
                suit={this.state.deck[0].suit}
                image={this.state.deck[0].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[1].rank}
                suit={this.state.deck[1].suit}
                image={this.state.deck[1].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[2].rank}
                suit={this.state.deck[2].suit}
                image={this.state.deck[2].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[3].rank}
                suit={this.state.deck[3].suit}
                image={this.state.deck[3].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[4].rank}
                suit={this.state.deck[4].suit}
                image={this.state.deck[4].image}
              />
            </Col>
          </Row>
          <Row className="mt-3 mb-5">
            <Col>
              <PlayingCard
                rank={this.state.deck[5].rank}
                suit={this.state.deck[5].suit}
                image={this.state.deck[5].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[6].rank}
                suit={this.state.deck[6].suit}
                image={this.state.deck[6].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[7].rank}
                suit={this.state.deck[7].suit}
                image={this.state.deck[7].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[8].rank}
                suit={this.state.deck[8].suit}
                image={this.state.deck[8].image}
              />
            </Col>
            <Col>
              <PlayingCard
                rank={this.state.deck[9].rank}
                suit={this.state.deck[9].suit}
                image={this.state.deck[9].image}
              />
            </Col>
          </Row>
        </Container>
        <div className="my-3">
          <Button
            className="mx-auto"
            color="danger"
            style={{ display: this.state.showQuit ? "block" : "none" }}
            onClick={this.handleQuitButton}
          >
            Quit
          </Button>
          <Button
            className="mx-auto"
            color="success"
            style={{ display: this.state.showPlay ? "block" : "none" }}
            onClick={this.handlePlayButton}
          >
            Play
          </Button>
        </div>
      </div>
    );
  }
}

export default PirateGoldGame;
