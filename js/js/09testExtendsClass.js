/**
 * @param {String} trade
 * @param {String} model
 * @param {Number} weight en kg
 * 
 */
 class Bike {
  constructor(trade, model, weight) {
      this.trade = trade;
      this.model = model;
      this.weight = weight;
  }
  pedal() {
      console.log(`Je pédale!`);
  }
}
const biker = new Bike("Blue Strike", "TT", 30);
console.log(`Biker`, biker);
biker.pedal();

class Tandem extends Bike {
  static seat_number = 2;
  pedal() {
      console.log(`Nous sommes ${Tandem.seat_number} à pédaler !`);
  }
}
const tandemer = new Tandem("Red Strike", "PTT", 50);
console.log(`Tandemer`, tandemer);
tandemer.pedal();
