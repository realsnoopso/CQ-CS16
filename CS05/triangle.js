import { Polygon } from './ploygon.js';

export class Triangle extends Polygon {
  constructor(coordinates) {
    super(coordinates);
  }

  getTriangleArea(lengthes) {
    const [a, b, c] = this.straightLengthes;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  }
}
