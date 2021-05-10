import { Button, Container, Row, Col } from "reactstrap";
import { Component } from "react";
import { deckObject, shuffleDeck } from "../shared/deckObject";
import { PlayingCard } from "../shared/PlayingCardComponent";

// PirateGoldGame class Component
class PirateGoldGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showQuit: false,
      showPlay: true,
      deck: deckObject(),
      showCards: false,
      tableau: [],
    };
  }
  displayCards = () => {
    for (let i = 0; i < this.state.deck.length; i++) {
      console.log(
        `Deck: ${i}: ${this.state.deck[i].rank} of ${this.state.deck[i].suit}`
      );
    }
  };
  handlePlayButton = () => {
    this.setState({
      showQuit: true,
      showPlay: false,
      deck: shuffleDeck([...this.state.deck]),
      showCards: true,
    });
  };
  handleQuitButton = () => {
    this.setState({
      showQuit: false,
      showPlay: true,
      deck: deckObject(),
      showCards: false,
      tableau: [],
    });
  };
  render() {
    return (
      <div>
        {this.state.showCards && (
          <Container>
            <Row className="mt-4 mb-5">
              {this.state.deck
                .filter((card, index) => index < 5)
                .map((card, index) => (
                  <Col key={index}>
                    <PlayingCard
                      rank={card.rank}
                      suit={card.suit}
                      image={card.image}
                    />
                  </Col>
                ))}
            </Row>
            <Row className="mt-5 mb-4">
              {this.state.deck
                .filter((card, index) => index >= 5 && index < 10)
                .map((card, index) => (
                  <Col key={index + 5}>
                    <PlayingCard
                      rank={card.rank}
                      suit={card.suit}
                      image={card.image}
                      selected={card.selected}
                    />
                  </Col>
                ))}
            </Row>
          </Container>
        )}
        {this.state.showCards === false && (
          <div className="container main-container my-5 py-5">
            <div className="row w-100 h-auto justify-content-center align-items-center my-5 py-5">
              <div className="col py-4 my-3"></div>
            </div>
          </div>
        )}
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
        <div className="my-3">
          <Button color="warning" onClick={this.displayCards}>
            Show
          </Button>
        </div>
      </div>
    );
  }
}

export default PirateGoldGame;
