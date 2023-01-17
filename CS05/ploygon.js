import { getSets } from './utils.js';
import { Straight } from './straight.js';

export class Polygon {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.straightLengthes = this.getStraightLengthes(getSets(coordinates));
  }

  getStraightLengthes(sets) {
    const lenghtes = [];
    sets.map((set) => {
      const straight = new Straight();
      const length = straight.getLength(set);
      lenghtes.push(length);
    });
    return lenghtes;
  }
}
