import { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import PirateGoldGame from "./PirateGoldGameComponent";

// Sub-component to display the Instructions for Pirate Gold upon first load
function PirateGoldInstructions(props) {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h1 className="my-3">PIRATE GOLD</h1>
          <h2 className="my-4">Instructions</h2>
          <div className="text-left">
            <p>
              Pirate Gold is a relatively simple Solitaire game usually played
              by younger players, beginners or those who are new to card games.
              You will find when playing, that the rules are quite simple, and
              most of the time, you will win a great majority of the time.
            </p>
            <p>
              The game starts with 10 cards being dealt to the tableau (play
              area) into 2 horizontal rows of 5 cards each. Each move starts by
              the player selecting 2 cards in the tableau that are a pair. Each
              time that a pair is selected, then those cards will be replaced
              with 2 other cards from the top of the deck. Play continues until
              either there are no more cards in the deck (in this case, you
              win), or there are no more available pairs in the tablea (You
              would lose in this case, but this is quite rare).
            </p>
          </div>
          <p>Press START to begin playing</p>
          <p>Have fun!</p>
        </Col>
      </Row>
    </Container>
  );
}

// Main PirateGold Component
class PirateGold extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstructions: true,
      showGame: false,
    };
  }
  // Function that will be called when clicking on the button.
  // It will remove the instructions and show the game.
  removeInstructions = () => {
    this.setState({
      showInstructions: false,
      showGame: true,
    });
  };
  render() {
    return (
      // Set Instructions and button to display only upon initial load.
      // After clicking on the button, this entire div will disappear by being set to display: none
      <>
        <div
          style={{ display: this.state.showInstructions ? "block" : "none" }}
        >
          <PirateGoldInstructions />
          <Button
            type="button"
            color="primary"
            className="my-3"
            onClick={this.removeInstructions}
          >
            START
          </Button>
        </div>
        {/* Set Game to be off by default on first load of the page.
        After clicking on the button, this entire div will appear by setting display to block */}
        <div style={{ display: this.state.showGame ? "block" : "none" }}>
          <PirateGoldGame />
        </div>
      </>
    );
  }
}

export default PirateGold;
