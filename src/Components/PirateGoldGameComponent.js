import { Button, Container, Row, Col } from "reactstrap";
import { Component } from "react";
import {
  ranks,
  suits,
  PlayingCard,
  PlayingCardItem,
  faceDownCard,
} from "../shared/PlayingCardComponent";

// PirateGoldGame class Component
class PirateGoldGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuit: true,
      showPlay: false,
      deck: [],
    };
  }
  componentDidMount() {
    this.setupCardDeck();
    this.shuffleDeck();
    this.displayCards();
  }
  handleQuitButton = () => {
    this.setState({
      showQuit: false,
      showPlay: true,
    });
  };
  handlePlayButton = () => {
    this.setState({
      showQuit: true,
      showPlay: false,
    });
    console.log(this.state);
  };
  // setupCardDeck function
  setupCardDeck = () => {
    let index = 0;
    for (let suitIndex = 0; suitIndex < suits.length; suitIndex++) {
      for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
        const newCard = new PlayingCardItem(ranks[rankIndex], suits[suitIndex]);
        this.setState({ deck: this.state.deck, newCard });
        index++;
      }
    }
  };
  // Helper JS Function to pick a random card for index between 0 and 51 (for 52 card deck)
  pickRandomCard = () => {
    return Math.floor(Math.random() * 52);
  };
  // shuffleDeck function
  shuffleDeck = () => {
    let randomCard = -1;
    let temp = -1;
    for (let i = 0; i < this.state.deck.length; i++) {
      // Pick a random card position (0-51) and store into a variable.
      randomCard = this.pickRandomCard();
      // Continue picking random cards until the card at the current position in the
      //   for loop is not the same as the position of the random one being picked.
      while (i === randomCard) {
        randomCard = this.pickRandomCard();
      }
      // Swap the card at the current position in the for loop with the random one.
      temp = i;

      const tempDeck = [...this.state.deck];
      tempDeck[i] = tempDeck[randomCard];
      tempDeck[randomCard] = tempDeck[temp];
      this.setState({ deck: tempDeck });
    }
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
      <>
        <Container className="my-4">
          <Row>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
          </Row>
          <Row>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
            </Col>
            <Col>
              <PlayingCard />
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
      </>
    );
  }
}

export default PirateGoldGame;
