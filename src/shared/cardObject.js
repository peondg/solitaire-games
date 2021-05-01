class cardObject {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.image = `images/cards/${this.rank} of ${this.suit}.jpeg`;
  }
}

export default cardObject;
