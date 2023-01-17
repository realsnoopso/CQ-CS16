import { Triangle } from './triangle.js';

export class Square extends Triangle {
  constructor(coordinates) {
    super(coordinates);
  }

  getSquareArea() {
    this.getTriangleArea();
    const [a, b, c, d] = this.straightLengthes;

    // const s = a + b + c + d;
    // const A = Math.PI / 2;
    // const n = 4;
    // const w = 2 * Math.sqrt(s / n) * Math.cos(A / n);
    // return w;
  }
}
