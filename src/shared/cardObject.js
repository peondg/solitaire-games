export default class cardObject {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
    this.image = `/images/cards/${this.rank}_${this.suit}.jpeg`;
  }
}
